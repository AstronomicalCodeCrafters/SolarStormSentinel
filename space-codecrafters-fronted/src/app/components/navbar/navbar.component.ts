import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { uid } from 'uid';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  @Input() messageExist: boolean = false;
  showSidenav: boolean = false;
  sections: any[] = [];

  shoppingBag: boolean = false;
  search: boolean = false;
  landing: boolean = false;
  menu: boolean = false;
  profile: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router,) {
  }

  ngOnInit(): void {
    this.sections = [
      {
        name: "Indicador KP",
        options: [
          {
            name: "Indicador Actual",
            component: "",
          },
          {
            name: "Predicción de Indicador",
            component: "",
          }
        ],
        component: "",
      },
      {
        name: "Datos de Tormentas Geomagnéticas",
        options: [
          {
            name: "Escalas de tormentas",
            component: "",
          },
          {
            name: "Prevenciones",
            component: "equipo-de-trabajo",
          },
          {
            name: "Peligros",
            component: "",
          },
        ],
        component: "",
      },
    ];
  }

  shoppingBagActive() {
    this.showSidenav = false
    this.shoppingBag = true

    this.search = false
    this.landing = false
    this.menu = false
    this.profile = false
  }

  searchActive() {
    this.showSidenav = false
    this.search = true

    this.shoppingBag = false
    this.landing = false
    this.menu = false
    this.profile = false
  }

  landingActive() {
    this.showSidenav = false
    this.landing = true

    this.shoppingBag = false
    this.search = false
    this.menu = false
    this.profile = false
  }

  menuActive() {
    this.showSidenav = !this.showSidenav
    this.menu = true

    this.shoppingBag = false
    this.search = false
    this.landing = false
    this.profile = false
  }

  profileActive() {
    this.showSidenav = false
    this.profile = true

    this.shoppingBag = false
    this.search = false
    this.landing = false
    this.menu = false
  }

  get routerName(): any {
    return this.router?.url
  }

  getActiveTab(name: string): boolean {
    //this.search = false
    this.landing = false
    this.menu = false
    this.profile = false
    this.shoppingBag = false

    const routerName: string = this.routerName
    return !!(routerName && routerName.includes(name))
  }

  get selectedItems() {
    let data: any = sessionStorage.getItem("items")
    let selectedItems: any = data ? JSON.parse(data) : []
    return selectedItems
  }
}
