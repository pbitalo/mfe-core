import { Component, Input } from '@angular/core';

import { InformationType } from '@entities/information-type';

@Component({
  selector: 'app-information-container',
  templateUrl: './information-container.component.html',
  styleUrls: ['./information-container.component.scss'],
})
export class InformationContainerComponent {
  @Input() public information: InformationType = {
    color: '',
    title: '',
    value: '',
  };

  getColorClass() {
    const convertColorClass = {
      green: 'c-green',
      yellow: 'c-yellow',
      blue: 'c-blue',
      'green-light': 'c-green-light',
      '': '',
    };
    return this.information.color
      ? convertColorClass[this.information.color]
      : '';
  }
}
