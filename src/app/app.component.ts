import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { PanelManagerService } from './core/services/panel-manager.service';
import { DeviceService } from './core/services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('sidebarAnimation', [
      state('open', style({ width: '250px' })),
      state('closed', style({ width: '0' })),
      transition('open => closed', animate('0.5s')),
      transition('closed => open', animate('0.5s'))
    ]),
    trigger('mainAnimation', [
      state('shifted', style({ marginLeft: '250px' })),
      state('notShifted', style({ marginLeft: '0' })),
      transition('shifted => notShifted', animate('0.5s')),
      transition('notShifted => shifted', animate('0.5s'))
    ])
  ]
})
export class AppComponent {
  constructor(public panelManagerService:PanelManagerService,
    public deviceService:DeviceService ){
  }
}
