import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-kwitansi',
  templateUrl: './kwitansi.component.html',
  styleUrls: ['./kwitansi.component.scss']
})
export class KwitansiComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
  }


  dashboard() {
    this.router.navigate(['customer'])
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

