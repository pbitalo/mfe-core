import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewModule } from './view/view.module';

@NgModule({
  imports: [CommonModule, ViewModule],
  exports: [ViewModule],
})
export class PresentationModule {}
