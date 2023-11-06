import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Router} from "@angular/router";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {MessageService} from "primeng/api";
import {FormulirPemasukanComponent} from "../formulir-pemasukan/formulir-pemasukan.component";

@Component({
  selector: 'app-pemasukan',
  templateUrl: './pemasukan.component.html',
  styleUrls: ['./pemasukan.component.scss'],
  providers: [DialogService]
})
export class PemasukanComponent {
  sidebarVisible1=false;

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
