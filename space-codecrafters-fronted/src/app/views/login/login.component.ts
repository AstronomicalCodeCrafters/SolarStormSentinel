import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
  }

  logIn() {
    if (this.email && this.password) {
      sessionStorage.setItem("user", JSON.stringify({ email: this.email, password: this.password }))
      this.router.navigateByUrl("/cesta/tramitar-pedido");
    }
  }
}
