import { Component, OnInit } from '@angular/core';
import { AppEndpoints } from 'src/app/app.endpoints';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  kpIndicator:number = 0;
  question1:boolean = false;
  question2:boolean = false;
  question3:boolean = false;
  question4:boolean = false;

  constructor(public endpoint:AppEndpoints) { }

  ngOnInit(): void {
    this.get_kp();
  }

  get_kp(){
    let response:any = null;
    this.endpoint.get_kp().subscribe(
      data => response = data,
      err => {
        console.error(err)
      },
      () => {
        console.log("data", response)
        this.kpIndicator = response.Kp;
        
      }
    )
  }

}
