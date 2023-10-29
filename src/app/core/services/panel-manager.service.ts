import { DeviceService } from 'src/app/core/services/device.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PanelManagerService {
  desktopSidebarPanelVisible: boolean = false;
  mobileSidebarPanelVisible: boolean = false;

  upgradeContainerVisible: boolean = false;

  profileSettingVisible: boolean = false;
  constructor(public deviceService: DeviceService) {}

  toggleDesktopSidebar() {
    this.desktopSidebarPanelVisible = !this.desktopSidebarPanelVisible;
    this.profileSettingVisible= false;
  }
  toggleMobileSidebar() {
    this.mobileSidebarPanelVisible = !this.mobileSidebarPanelVisible;
  }
  toogleUpgradeContainer() {
      this.upgradeContainerVisible = !this.upgradeContainerVisible;
  }
}
