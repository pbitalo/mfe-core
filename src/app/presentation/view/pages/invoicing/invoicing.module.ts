import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicingRoutingModule } from './invoicing-routing.module';
import { InvoicingComponent } from './invoicing.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { DropdownContainerModule } from '@shared/components/dropdown-container/dropdown-container.module';
import { InformationContainerModule } from '@shared/components/information-container/information-container.module';

@NgModule({
  declarations: [InvoicingComponent],
  imports: [
    CommonModule,
    InvoicingRoutingModule,
    MatButtonModule,
    MatIconModule,
    DropdownContainerModule,
    InformationContainerModule,
    MatTableModule,
  ],
})
export class InvoicingModule {}
