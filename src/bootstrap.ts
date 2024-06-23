import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import {
  provideRouter,
  RouterModule,
  withComponentInputBinding,
} from '@angular/router';

import { HomeComponent } from './app/presentation/view/pages/home/home.component';
import { CORE_ROUTES } from './app/presentation/view/routes/core.routes';

bootstrapApplication(HomeComponent, {
  providers: [
    importProvidersFrom(BrowserModule, RouterModule),
    provideRouter(CORE_ROUTES, withComponentInputBinding()),
  ],
});
