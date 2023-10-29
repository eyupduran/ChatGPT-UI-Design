import { Component } from '@angular/core';
import { PanelManagerService } from '../../../services/panel-manager.service';

@Component({
  selector: 'app-desktop-sidebar',
  templateUrl: './desktop-sidebar.component.html',
  styleUrls: ['./desktop-sidebar.component.scss']
})
export class DesktopSidebarComponent {
  
  constructor(public panelManagerService:PanelManagerService){

  }
}
