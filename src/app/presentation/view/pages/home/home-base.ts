import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  template: '',
})
export abstract class HomeBase implements OnInit {
  isOpen = false;

  constructor(protected homeService: HomeService) {}

  ngOnInit() {
    this.homeService.isSideBarOpen$.subscribe(
      (next: boolean) => (this.isOpen = next)
    );
  }

  toogleSidebar(): void {
    this.homeService.setOpen(!this.isOpen);
  }
}
