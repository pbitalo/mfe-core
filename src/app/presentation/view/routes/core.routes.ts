import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

import { ApplicationType } from '@entities/application-type';

import { canActivateGuard } from './can-activate.guard';

export const CORE_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'home',
        exposedModule: './routes',
      }).then((r) => r.HOME_ROUTES),
    canActivate: [canActivateGuard],
    data: {
      applicationType: ApplicationType.home,
    },
  },
  {
    path: 'users',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'users',
        exposedModule: './routes',
      }).then((r) => r.USERS_ROUTES),
    canActivate: [canActivateGuard],
    data: {
      applicationType: ApplicationType.users,
    },
  },
  {
    path: 'customers',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'customers',
        exposedModule: './routes',
      }).then((r) => r.CUSTOMERS_ROUTES),
    canActivate: [canActivateGuard],
    data: {
      applicationType: ApplicationType.customers,
    },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
