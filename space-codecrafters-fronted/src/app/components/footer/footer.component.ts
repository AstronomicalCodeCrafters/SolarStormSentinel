import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  flag: boolean = true;
  flag2: boolean = true;
  email: string = "";
  privacyPolicy: boolean = false;
  phoneNumber: string = "+34 674 895 194";
  phoneNumberWhatsApp: string = "+34 674 895 194";
  currencyOptions: any[] = [
    { label: "(€) EUR", value: "eur"},
    { label: "($) USD", value: "usd"},
    { label: "($) MXN", value: "mxm"},
  ];
  languageOptions: any[] = [
    { label: "Español", value: "spanish"},
    { label: "Français", value: "french"},
    { label: "Português", value: "portuguese"},
  ];
  selectedCurrency:any = this.currencyOptions[0];
  selectedLenguage:any = this.languageOptions[0];
  
  constructor() { }

  ngOnInit(): void {
  }

}
