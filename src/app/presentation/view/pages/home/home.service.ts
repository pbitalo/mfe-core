import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { UserEntity, UserPermissions } from '@entities/user-entity';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private _user = new BehaviorSubject<UserEntity>({
    name: '',
    permission: UserPermissions.common,
    uuid: '',
  });
  public getUser$ = this._user.asObservable();

  private _isSideBarOpen = new BehaviorSubject<boolean>(false);
  public isSideBarOpen$ = this._isSideBarOpen.asObservable();

  private _sectors = new BehaviorSubject<Array<any>>([]); // tipar
  public getSectors$ = this._sectors.asObservable();

  private _sectorId = new BehaviorSubject<string>('');
  public getSectorId$ = this._sectorId.asObservable();

  setOpen(val: boolean) {
    this._isSideBarOpen.next(val);
  }

  setSector(id: string) {
    this._sectorId.next(id);
  }

  setUser(user: UserEntity) {
    this._user.next(user);
  }

  setSectors(sector: any) {
    this._sectors.next(sector);
  }
}
