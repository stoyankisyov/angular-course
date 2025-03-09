import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  count = signal(0);
  count$ = toObservable(this.count);
  interval$ = interval(1000);
  interval = toSignal(this.interval$, { initialValue: 0 });

  constructor() {
    effect(() => {
      console.log(`Button clicked ${this.count()} times - Signal`);
    });
  }

  ngOnInit() {
    const subscription = interval(1000)
      .pipe(map((value) => value * 2))
      .subscribe({
        next: (value) => console.log(value),
      });

    const subscriptionForConverted = this.count$.subscribe({
      next: (value) =>
        console.log(`Button clicked ${this.count()} times - Observable`),
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      subscriptionForConverted.unsubscribe();
    });
  }

  onClick() {
    this.count.update((value) => value + 1);
  }
}
