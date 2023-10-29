import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './core/components/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpgradePlanComponent } from './core/components/upgrade-plan/upgrade-plan.component';
import { DesktopSidebarComponent } from './core/components/sidebar/desktop/desktop-sidebar.component';
import { MobileSidebarComponent } from './core/components/sidebar/mobile/mobile-sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DesktopSidebarComponent,
    UpgradePlanComponent,
    MobileSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
