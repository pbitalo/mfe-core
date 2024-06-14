import { Component } from '@angular/core';

import { HomeBase } from '../../home-base';
import { Sectors } from '@entities/sector-entity';

@Component({
  selector: 'app-sidebar',
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
