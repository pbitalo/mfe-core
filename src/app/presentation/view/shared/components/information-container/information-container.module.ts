import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformationContainerComponent } from './information-container.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [InformationContainerComponent],
  imports: [CommonModule, MatIconModule],
  exports: [InformationContainerComponent],
})
export class InformationContainerModule {}
