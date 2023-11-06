import {Component, Input, Renderer2} from '@angular/core';
import {AuthenticationService} from "../../services/authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private renderer: Renderer2
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

  ngOnInit() {
    const submenuButtons = document.querySelectorAll('.submenu-button');

    submenuButtons.forEach(item => {
      this.renderer.listen(item, 'click', () => {
        const submenuContent = document.querySelector('.submenu-content');
        submenuContent?.classList.toggle('show-submenu');
      });
    });
  }
}



