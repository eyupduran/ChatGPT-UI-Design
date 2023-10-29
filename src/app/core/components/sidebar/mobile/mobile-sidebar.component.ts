import { Component } from '@angular/core';
import { DeviceService } from 'src/app/core/services/device.service';
import { PanelManagerService } from 'src/app/core/services/panel-manager.service';

@Component({
  selector: 'app-mobile-sidebar',
  templateUrl: './mobile-sidebar.component.html',
  styleUrls: ['./mobile-sidebar.component.scss']
})
export class MobileSidebarComponent {

  constructor(public panelManagerService:PanelManagerService,
    public deviceService:DeviceService){

  }
}
