import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountDto} from "../../model/account-dto";
import {AccountRegistrationRequest} from "../../model/account-registration-request";
import {AccountUpdateRequest} from "../../model/account-update-request";
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly customerUrl = `${environment.api.baseUrl}/${environment.api.userUrl}`;

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<AccountDto[]> {
    return this.http.get<AccountDto[]>(this.customerUrl);
  }

  registerCustomer(customer: AccountRegistrationRequest): Observable<void> {
    return this.http.post<void>(this.customerUrl, customer);
  }

  deleteCustomer(id: number | undefined): Observable<void> {
    return this.http.delete<void>(`${this.customerUrl}/${id}`)
  }

  updateCustomer(id: number | undefined, customer: AccountUpdateRequest): Observable<void> {
    return this.http.put<void>(`${this.customerUrl}/${id}`, customer);
  }


}
