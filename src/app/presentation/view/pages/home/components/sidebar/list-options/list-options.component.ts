import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

import { SidebarEnum } from 'src/app/domain/enums/sidebar-enum'
import { HomeBase } from '../../../home-base'
import { HomeService } from '../../../home.service'

type options = {
  uuid: string
  name: string
  icon: string
}

@Component({
  selector: 'app-list-options',
  templateUrl: './list-options.component.html',
  styleUrls: ['./list-options.component.scss'],
})
export class ListOptionsComponent extends HomeBase {
  private _break_point = 650

  @Input() public name = ''

  @Input() public icon = ''

  @Input() public item: any

  @Input() public list: Array<options> = new Array<options>()

  constructor(protected override homeService: HomeService, private router: Router) {
    super(homeService)
  }

  onResize(event: any) {
    event.currentTarget.innerWidth <= this._break_point
      ? this.homeService.setOpen(true)
      : this.homeService.setOpen(false)
  }

  open() {
    if (this.name === SidebarEnum.configuracoes) {
      this.item.isSettingOpen = !this.item.isSettingOpen
    }
    if (this.name === SidebarEnum.automacoes) {
      this.item.isOptionsOpen = !this.item.isOptionsOpen
    }
    if (this.name === SidebarEnum.testes) {
      this.item.isTestsOpen = !this.item.isTestsOpen
    }
  }

  isBlockOpen(): boolean {
    if (this.item.isOptionsOpen && this.name === SidebarEnum.automacoes) {
      return true
    }
    if (this.item.isSettingOpen && this.name === SidebarEnum.configuracoes) {
      return true
    }
    if (this.item.isSettingOpen && this.name === SidebarEnum.testes) {
      return true
    }
    return false
  }

  getHeight() {
    if (!this.item.isOptionsOpen && this.name === SidebarEnum.automacoes) {
      return 0
    }
    if (!this.item.isSettingOpen && this.name === SidebarEnum.configuracoes) {
      return 0
    }
    if (!this.item.isTestsOpen && this.name === SidebarEnum.testes) {
      return 0
    }
    return this.list.length ? `${this.list.length * 40 + 50}px` : 0
  }

  redirect(item: any, $event: any) {
    $event.stopPropagation()
    if (item?.route) {
      this.router.navigate([item.route])
    }
  }

  getText(): string {
    if (this.name === SidebarEnum.automacoes) {
      return 'Opções'
    }
    if (this.name === SidebarEnum.configuracoes || this.name === SidebarEnum.testes) {
      return 'Lista'
    }

    return ''
  }
}
