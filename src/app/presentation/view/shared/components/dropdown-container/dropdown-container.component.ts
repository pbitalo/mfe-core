import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-container',
  templateUrl: './dropdown-container.component.html',
  styleUrls: ['./dropdown-container.component.scss'],
})
export class DropdownContainerComponent {
  @Input() public title = '';

  _isClose = false;

  toogleContainer() {
    this._isClose = !this._isClose;
  }

  getHeight() {
    return this._isClose ? '0' : '';
  }
}
