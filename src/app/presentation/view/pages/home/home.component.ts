import { Component } from '@angular/core';

import { catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import { HomeBase } from './home-base';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends HomeBase {
  override ngOnInit(): void {
    super.ngOnInit();
    this.reqGetUser();
    this.reqGetSectors();
  }

  reqGetUser(): void {
    const http$ = ajax.getJSON('http://localhost:3000/user').pipe(
      catchError((error) => {
        console.error(error);
        return of(error);
      })
    );
    http$.subscribe((user) => {
      this.homeService.setUser(user);
    });
  }

  reqGetSectors(): void {
    const http$ = ajax.getJSON('http://localhost:3000/sectors').pipe(
      catchError((error) => {
        console.error(error);
        return of(error);
      })
    );
    http$.subscribe((sector) => this.homeService.setSectors(sector));
  }
}
