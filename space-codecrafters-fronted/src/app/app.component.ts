import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { BannerComponent } from "./components/banner/banner.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'theSunStormFrontend';

  @ViewChild(BannerComponent) child: BannerComponent | undefined;
  bannerMessage: string = "Sólo durante esta semana envíos GRATUITO en pedidos de más de 35$";

  constructor(private router: Router) {
    sessionStorage.clear();
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
}
