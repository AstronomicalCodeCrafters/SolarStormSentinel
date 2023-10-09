import { Component, OnInit } from '@angular/core';
import { AppEndpoints } from 'src/app/app.endpoints';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  dateStart:string = ""
  dateEnd:string = ""
  constructor(public endpoint:AppEndpoints) {}

  ngOnInit(): void {
    this.get_predict();
  }

  get_predict(){
    let payload = {
      //start: "2022-12-12",
      start: this.dateStart,
      end: this.dateEnd
      //end: "2023-10-10"
    }

    let response:any = null;
    this.endpoint.get_predict_kp(payload).subscribe(
      data => response = data,
      err => {
        console.error(err)
      },
      () => {
        console.log("data", response)
      }
    )
  }

}
