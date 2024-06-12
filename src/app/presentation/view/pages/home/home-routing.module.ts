import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { InvoicingComponent } from '../invoicing/invoicing.component';
import { AccountancyComponent } from '../accountancy/accountancy.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: 'invoicing',
        component: InvoicingComponent,
      },
      {
        path: 'accountancy',
        component: AccountancyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
