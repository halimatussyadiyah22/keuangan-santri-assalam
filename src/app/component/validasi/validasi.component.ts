import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-validasi',
  templateUrl: './validasi.component.html',
  styleUrls: ['./validasi.component.scss']
})
export class ValidasiComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
  }


  dashboard() {
    this.router.navigate(['dashboard'])
  }
  pemasukan() {
    this.router.navigate(['pemasukan'])
  }
  pengeluaran() {
    this.router.navigate(['pengeluaran'])
  }
  validasi() {
    this.router.navigate(['validasi'])
  }
  kwitansi() {
    this.router.navigate(['kwitansi'])
  }
}

