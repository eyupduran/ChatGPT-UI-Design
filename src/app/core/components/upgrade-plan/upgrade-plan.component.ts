import { Component } from '@angular/core';
import { PanelManagerService } from '../../services/panel-manager.service';

@Component({
  selector: 'app-upgrade-plan',
  templateUrl: './upgrade-plan.component.html',
  styleUrls: ['./upgrade-plan.component.scss']
})
export class UpgradePlanComponent {
  constructor(public panelManagerService:PanelManagerService){

  }
}
