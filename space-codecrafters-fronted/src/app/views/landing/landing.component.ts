import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})

export class LandingComponent implements OnInit {
  cards: any[] = []
  collections: any[] = []

  constructor() {
  }

  ngOnInit(): void {
    this.cards = [
      {
        name: "Rojo Candy",
        id: 1,
        description: "15 ml Semipermanente",
        price: "19.99",
        previousPrice: "12.99",
        src: "../../../assets/images/img.png",
        rate: 4,
        routeNavigation: ['categoria', 'Rojo Candy', 'producto', '1'],
      },
      {
        name: "Nude Ice",
        id: 2,
        description: "15 ml Semipermanente",
        price: "19.99",
        previousPrice: "12.99",
        src: "../../../assets/images/img_1.png",
        rate: 4,
        routeNavigation: ['categoria', 'Nude Ice', 'producto', '2'],
      },
      {
        name: "Rojo Candy",
        id: 1,
        description: "15 ml Semipermanente",
        price: "19.99",
        previousPrice: "12.99",
        src: "../../../assets/images/img.png",
        rate: 4,
        routeNavigation: ['categoria', 'Rojo Candy', 'producto', '3'],
      },
      {
        name: "Nude Ice",
        id: 2,
        description: "15 ml Semipermanente",
        price: "19.99",
        previousPrice: "12.99",
        src: "../../../assets/images/img_1.png",
        rate: 4,
        routeNavigation: ['categoria', 'Nude Ice', 'producto', '3'],
      },
    ]

    this.collections = [
      { name: "Nude", src: "../../../assets/images/sections/img_1.png", sectionId: 'colecciones', id: "1Collection", },
      { name: "Valentine", src: "../../../assets/images/sections/img.png", sectionId: 'colecciones', id: "2Collection", },
      { name: "Luxe", src: "../../../assets/images/sections/img_2.png", sectionId: 'colecciones', id: "3Collection", },
      { name: "Ocean", src: "../../../assets/images/sections/img_3.png", sectionId: 'colecciones', id: "4Collection", },
      { name: "Fluor", src: "../../../assets/images/sections/img_4.png", sectionId: 'colecciones', id: "5Collection", },
      { name: "Women", src: "../../../assets/images/sections/img_5.png", sectionId: 'colecciones', id: "6Collection", },
    ]
  }
}
