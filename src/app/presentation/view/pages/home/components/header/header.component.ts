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

  sector: Sector[] = [
    { value: 'all', viewValue: 'Todos', id: '1' },
    { value: 'contabilidade', viewValue: 'Contabilidade', id: '2' },
    { value: 'administrativo', viewValue: 'Administrativo', id: '3' },
  ];

  override ngOnInit(): void {
    super.ngOnInit();
    this.createForm();
    this.homeService.getUser$.subscribe(
      (user: UserEntity) => (this._user = user)
    );
    this._form.patchValue({
      sectorId: '1',
    });
    this.createListeners();
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
