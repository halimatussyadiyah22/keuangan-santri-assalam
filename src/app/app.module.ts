import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './component/customer/customer.component';
import {MessageModule} from "primeng/message";
import {AvatarModule} from "primeng/avatar";
import {FormsModule} from "@angular/forms";
import {ChipsModule} from "primeng/chips";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {BadgeModule} from "primeng/badge";
import {SidebarModule} from "primeng/sidebar";
import {RippleModule} from "primeng/ripple";
import {MenuModule} from "primeng/menu";
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { MenuItemComponent } from './component/menu-item/menu-item.component';
import { HeaderBarComponent } from './component/header-bar/header-bar.component';
import { LogoComponent } from './component/logo/logo.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    MenuBarComponent,
    MenuItemComponent,
    HeaderBarComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MessageModule,
    AvatarModule,
    FormsModule,
    ChipsModule,
    ButtonModule,
    CardModule,
    BadgeModule,
    SidebarModule,
    RippleModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
