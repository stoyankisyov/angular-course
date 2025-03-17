import { Routes } from '@angular/router';

import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { routes as userRoutes } from './users/user.routes';
import {
  dummyCanMatch,
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';

export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
  },
  {
    path: 'users/:userId',
    component: UserTasksComponent,
    children: userRoutes,
    runGuardsAndResolvers: 'always',
    canMatch: [dummyCanMatch],
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
