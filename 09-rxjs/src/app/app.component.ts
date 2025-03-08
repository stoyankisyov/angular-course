import {
  Component,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  destroyRef = inject(DestroyRef);

  count = signal(0);

  constructor() {
    effect(() => {
      console.log(`Button clicked ${this.count()} times`);
    });
  }

  ngOnInit() {
    const subscription = interval(1000)
      .pipe(map((value) => value * 2))
      .subscribe({
        next: (value) => console.log(value),
      });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onClick() {
    this.count.update((value) => value + 1);
  }
}
