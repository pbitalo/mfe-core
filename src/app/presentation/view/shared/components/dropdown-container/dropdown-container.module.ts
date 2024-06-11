import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownContainerComponent } from './dropdown-container.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DropdownContainerComponent],
  imports: [CommonModule, MatIconModule],
  exports: [DropdownContainerComponent],
})
export class DropdownContainerModule {}
