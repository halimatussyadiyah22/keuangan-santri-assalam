import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MessageModule} from "primeng/message";
import {AvatarModule} from "primeng/avatar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {BadgeModule} from "primeng/badge";
import {SidebarModule} from "primeng/sidebar";
import {RippleModule} from "primeng/ripple";
import {MenuModule} from "primeng/menu";
import { LoginComponent } from './component/login/login.component';
import {ToastModule} from "primeng/toast";
import {InputTextModule} from "primeng/inputtext";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {HttpInterceptorService} from "./services/interceptor/http-interceptor.service";
import { OpeningComponent } from './component/opening/opening.component';
import { RegisterComponent } from './component/register/register.component';
import {ImageCropperModule} from "ngx-image-cropper";
import {NgOptimizedImage} from "@angular/common";
import {CustomerComponent} from "./component/dashboard/customer/customer.component";
import {CardModule} from "primeng/card";
import { PemasukanComponent } from './component/pemasukan/pemasukan.component';
import { PengeluaranComponent } from './component/pengeluaran/pengeluaran.component';
import { ValidasiComponent } from './component/validasi/validasi.component';
import { KwitansiComponent } from './component/kwitansi/kwitansi.component';
import {ChartModule} from "primeng/chart";
import {ChartComponent} from "./component/dashboard/chart/chart.component";
import {DropdownModule} from "primeng/dropdown";
import { MenuItemComponent } from './component/menu-item/menu-item.component';
import {PanelMenuModule} from "primeng/panelmenu";
import { SideBarComponent } from './component/side-bar/side-bar.component';
import {TableModule} from "primeng/table";
import {TabMenuModule} from "primeng/tabmenu";
import { FormulirPemasukanComponent } from './component/formulir-pemasukan/formulir-pemasukan.component';
import { FormulirPengeluaranComponent } from './component/formulir-pengeluaran/formulir-pengeluaran.component';
import {InputTextareaModule} from "primeng/inputtextarea";
import {DynamicDialogModule} from "primeng/dynamicdialog";
import { KwitansiCardComponent } from './component/kwitansi-card/kwitansi-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    LoginComponent,
    OpeningComponent,
    RegisterComponent,
    PemasukanComponent,
    PengeluaranComponent,
    ValidasiComponent,
    KwitansiComponent,
    ChartComponent,
    MenuItemComponent,
    SideBarComponent,
    FormulirPemasukanComponent,
    FormulirPengeluaranComponent,
    KwitansiCardComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    ToastModule,
    CardModule,
    BadgeModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    MenuModule,
    MessageModule,
    FormsModule,
    InputTextModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    ImageCropperModule,
    NgOptimizedImage,
    ChartModule,
    DropdownModule,
    PanelMenuModule,
    TableModule,
    TabMenuModule,
    ReactiveFormsModule,
    InputTextareaModule,
    DynamicDialogModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  },
    MessageService,
    ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
