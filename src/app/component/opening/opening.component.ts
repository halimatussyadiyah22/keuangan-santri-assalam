import { Component } from '@angular/core';
import {AuthenticationRequest} from "../../model/authentication-request";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-opening',
  templateUrl: './opening.component.html',
  styleUrls: ['./opening.component.scss']
})
export class OpeningComponent {
  authenticationRequest: AuthenticationRequest = {};
  errorMsg = '';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
  }

  login() {
    this.router.navigate(['login']);
  }

  register() {
    this.router.navigate(['register']);
  }
}


