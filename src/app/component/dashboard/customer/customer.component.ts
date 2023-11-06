import {Component, ElementRef, Input, Renderer2} from '@angular/core';
import {AuthenticationService} from "../../../services/authentication/authentication.service";
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";
import _default from "chart.js/dist/plugins/plugin.tooltip";
import backgroundColor = _default.defaults.backgroundColor;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  sidebarVisible: boolean = false;

}
