import {RouterModule, Routes} from "@angular/router";
import {CustomerComponent} from "./component/dashboard/customer/customer.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {OpeningComponent} from "./component/opening/opening.component";
import {NgModule} from "@angular/core";
import {PemasukanComponent} from "./component/pemasukan/pemasukan.component";
import {PengeluaranComponent} from "./component/pengeluaran/pengeluaran.component";
import {ValidasiComponent} from "./component/validasi/validasi.component";
import {KwitansiComponent} from "./component/kwitansi/kwitansi.component";
import {KwitansiCardComponent} from "./component/kwitansi-card/kwitansi-card.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ppAssalamCA',
    pathMatch: 'full'
  },
  {
  path: 'dashboard',
  component: CustomerComponent
},
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'ppAssalamCA',
    component: OpeningComponent,
  },
  {
    path: 'pemasukan',
    component: PemasukanComponent,
  },
  {
    path: 'pengeluaran',
    component: PengeluaranComponent,
  },
  {
    path: 'validasi',
    component: ValidasiComponent,
  },
  {
    path: 'kwitansi',
    component: KwitansiComponent,
  },
  {
    path: 'cek',
    component: KwitansiCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
