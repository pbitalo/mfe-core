import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './home.service';
import { ListOptionsComponent } from './components/sidebar/list-options/list-options.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ListOptionsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatSelectModule,
    MatTooltipModule,
    HomeRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [HomeService],
})
export class HomeModule {}
