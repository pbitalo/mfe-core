import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AccountancyRoutingModule } from './accountancy-routing.module'
import { AccountancyComponent } from './accountancy.component'

@NgModule({
  declarations: [AccountancyComponent],
  imports: [CommonModule, AccountancyRoutingModule],
})
export class AccountancyModule {}
