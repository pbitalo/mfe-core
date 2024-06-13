import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Sector } from '@entities/sector-entity';
import { UserEntity, UserPermissions } from '@entities/user-entity';
import { HomeBase } from '../../home-base';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends HomeBase {
  protected _user: UserEntity | undefined;
  protected _form: FormGroup = new FormGroup({});
  private _formBuilder = new FormBuilder();

  protected _sector: any = [];
  protected _sectorFilter: any = [];

  sector: Sector[] = [];

  override ngOnInit(): void {
    super.ngOnInit();
    this.createForm();
    this.homeService.getUser$.subscribe(
      (user: UserEntity) => (this._user = user)
    );
    this.homeService.getSectors$.subscribe((sector: any) => {
      this.generateListSectors(sector);
      this._sectorFilter = sector;
    });
    this._form.patchValue({
      sectorId: '1',
    });
    this.createListeners();
  }

  generateListSectors(sector: any): void {
    sector.forEach((item: any, index: number) => {
      this.sector.push({
        value: item.name,
        viewValue: item.name,
        id: index + 2,
      });
    });
    if (this.sector[0]?.viewValue !== 'Todos') {
      this.sector.unshift({ value: 'all', viewValue: 'Todos', id: '1' });
    }
  }

  createListeners() {
    this._form
      .get('sectorId')
      ?.valueChanges.subscribe((val) => val && this.homeService.setSector(val));
  }

  createForm() {
    this._form = this._formBuilder.group({
      sectorId: [],
    });
  }

  get isAdminUser(): boolean {
    return this._user?.permission === UserPermissions.admin ? true : false;
  }

  get getFirstName(): string {
    return this._user?.name ? this._user?.name.split(' ')[0] : '';
  }
}
