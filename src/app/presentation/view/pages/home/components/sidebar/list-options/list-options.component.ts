import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { HomeBase } from '../../../home-base';
import { HomeService } from '../../../home.service';

type options = {
  uuid: string;
  name: string;
  icon: string;
};

@Component({
  selector: 'app-list-options',
  templateUrl: './list-options.component.html',
  styleUrls: ['./list-options.component.scss'],
})
export class ListOptionsComponent extends HomeBase {
  private _break_point = 650;
  @Input() public name = '';
  @Input() public icon = '';
  @Input() public item: any;
  @Input() public list: Array<options> = new Array<options>();

  constructor(
    protected override homeService: HomeService,
    private router: Router
  ) {
    super(homeService);
  }

  onResize(event: any) {
    event.currentTarget.innerWidth <= this._break_point
      ? this.homeService.setOpen(true)
      : this.homeService.setOpen(false);
  }

  open() {
    this.item.isOpen = !this.item.isOpen;
  }

  redirect(item: any, $event: any) {
    $event.stopPropagation();
    if (item?.route) {
      this.router.navigate([item.route]);
    }
  }

  get isBlockOpen(): boolean {
    return this.item.isOpen;
  }

  get getHeight(): string {
    return this.item.isOpen && this.list.length
      ? `${this.list.length * 40}px`
      : '0';
  }

  get getPadding(): string {
    if (!this.item.isOpen) {
      return '0';
    }
    return '12px 0';
  }
}
