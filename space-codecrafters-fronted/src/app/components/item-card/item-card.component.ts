import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  @Input() item: any = null
  @Input() id: any = ""

  modalRef?: BsModalRef;

  constructor(private route: ActivatedRoute, private router: Router, private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  routerNavigation() {
    this.router.navigate(this.item.routeNavigation);
  }

  addItemToShoppingBag() {
    let data: any = sessionStorage.getItem("items")
    let selectedItems: any = data ? JSON.parse(data) : []

    const selectedItem: any = { ...this.item }
    if (selectedItems.find((item: any) => item.id === this.item.id)) {
      selectedItems = selectedItems.map((item: any) => {
        if (item.id === this.item.id) {
          item.amount++
        }
        return item
      })
    } else {
      selectedItem.amount = 1
      selectedItem.price = parseFloat(selectedItem.price)
      selectedItems.push(selectedItem)
    }

    sessionStorage.setItem("items", JSON.stringify(selectedItems))
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.addItemToShoppingBag()
  }

  deleteItemToShoppingBag() {
    let data: any = sessionStorage.getItem("items")
    let selectedItems: any = data ? JSON.parse(data) : []

    const element: any = selectedItems.find((item: any) => item.id === this.item.id)
    if (element && element.amount > 0) {
      selectedItems = selectedItems.map((item: any) => {
        if (item.id === this.item.id) {
          item.amount--;
        }
        return item
      })
    }

    sessionStorage.setItem("items", JSON.stringify(selectedItems.filter((selectedItem: any) => selectedItem.amount > 0)))
    this.modalRef?.hide();
  }
}
