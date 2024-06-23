import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sectors } from '@entities/sector-entity';

import { HomeBase } from '../../home-base';
import { ListOptionsComponent } from './list-options/list-options.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, ListOptionsComponent, HeaderComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent extends HomeBase {
  protected _sectors: Array<Sectors> = [];
  protected _sectorId: string | number = '1';

  override ngOnInit(): void {
    super.ngOnInit();
    this.homeService.getSectors$.subscribe((sector: Array<Sectors>) => {
      this._sectors = sector;
    });
    this.homeService.getSectorId$.subscribe((sectorId: string) => {
      this._sectorId = sectorId;
    });
  }

  get filterSectors(): any {
    if (this._sectors.length > 0 && +this._sectorId > 1) {
      return [this._sectors[+this._sectorId - 2]];
    }
    return this._sectors;
  }
}
