import { DeviceService } from './../../services/device.service';
import { PanelManagerService } from './../../services/panel-manager.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  model3_5Visible = false;
  model4Visible = false

  constructor(public panelManagerService:PanelManagerService,
    public deviceService:DeviceService ){

  }
  showModel3_5() {
    this.model3_5Visible = true;
  }

  hideModel3_5() {
    this.model3_5Visible = false;
  }
  showModel4() {
    this.model4Visible = true;
  }

  hideModel4() {
    this.model4Visible = false;
  }
}
