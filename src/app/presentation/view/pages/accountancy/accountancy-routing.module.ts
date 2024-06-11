import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AccountancyComponent } from './accountancy.component'

const routes: Routes = [
  {
    path: 'accountancy',
    component: AccountancyComponent,
    data: {
      title: 'Contabilidade',
    },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountancyRoutingModule {}
