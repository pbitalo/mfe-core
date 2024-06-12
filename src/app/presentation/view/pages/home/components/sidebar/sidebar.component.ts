import { Component } from '@angular/core';

import { HomeBase } from '../../home-base';
import { SectorName } from 'src/app/domain/enums/sidebar-enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent extends HomeBase {
  protected _sector: any = [];
  protected _sectorFilter: any = [];

  override ngOnInit(): void {
    super.ngOnInit();
    this.homeService.getSectors$.subscribe((sector: any) => {
      this._sector = sector;
      this._sectorFilter = sector;
    });
    this.homeService.getSectorId$.subscribe((sectorId: string) => {
      if (sectorId === '1') {
        this._sectorFilter = this._sector;
      }
      if (sectorId === '2') {
        this._sectorFilter = [this.findSector(SectorName.contabilidade)];
      }
      if (sectorId === '3') {
        this._sectorFilter = [this.findSector(SectorName.administrativo)];
      }
    });
  }

  findSector(sectorName: string) {
    return this._sector.find((item: any) => {
      if (item.name === sectorName) {
        return item;
      }
    });
  }
}
