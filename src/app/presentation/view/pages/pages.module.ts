import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModule } from './login/login.module';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeModule } from './home/home.module';
import { InvoicingModule } from './invoicing/invoicing.module';
import { AccountancyModule } from './accountancy/accountancy.module';

@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    HomeModule,
    InvoicingModule,
    AccountancyModule,
    PagesRoutingModule,
  ],
  exports: [PagesRoutingModule],
})
export class PagesModule {}
