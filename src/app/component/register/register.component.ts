import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Router} from "@angular/router";
import {AccountRegistrationRequest} from "../../model/account-registration-request";
import {AccountService} from "../../services/account/account.service";
import {AuthenticationRequest} from "../../model/authentication-request";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  errorMsg = '';
  customer: AccountRegistrationRequest = {};

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private customerService: AccountService
  ) {
  }

  login(){
    this.router.navigate(['login'])
  }
  createAccount() {
    this.customerService.registerCustomer(this.customer)
      .subscribe({
        next: () => {
          // login
          const authReq: AuthenticationRequest = {
            username: this.customer.email,
            password: this.customer.password
          }
          this.authenticationService.login(authReq)
            .subscribe({
              next: (authenticationResponse) => {
                localStorage.setItem('user', JSON.stringify(authenticationResponse))
                this.router.navigate(['dashboard']);
              },
              error: (err) => {
                if (err.error.statusCode == 401) {
                  this.errorMsg = 'Login and / or password is incorrect';
                }
              }
            });
        }
      });

  }
}
