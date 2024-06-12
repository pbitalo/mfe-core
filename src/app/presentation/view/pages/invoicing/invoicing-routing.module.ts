import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicingComponent } from './invoicing.component';

const routes: Routes = [
  {
    path: 'invoicing',
    component: InvoicingComponent,
    data: {
      title: 'Faturamento',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicingRoutingModule {}
