import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {AuthenticationRequest} from "../../model/authentication-request";
import {AuthenticationResponse} from "../../model/authentication-response";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly authUrl = `${environment.api.baseUrl}/${environment.api.authUrl}`;

  constructor(
    private http: HttpClient
  ) { }

  login(authRequest: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this.http
      .post<AuthenticationResponse>
      (this.authUrl, authRequest);
  }
}
