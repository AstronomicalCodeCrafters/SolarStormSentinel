import { Component, OnInit } from '@angular/core';
import { AppEndpoints } from 'src/app/app.endpoints';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-predictions',
  templateUrl: './list-predictions.component.html',
  styleUrls: ['./list-predictions.component.scss']
})
export class ListPredictionsComponent implements OnInit {

  startDate: string = "";
  endDate: string = "";
  dataPredictions: any = null;

  count1: number = 0;
  count2: number = 0;
  count3: number = 0;
  count4: number = 0;
  count5: number = 0;

  //localstorage
  lstartDate: string = "";
  lendDate: string = "";
  ldataPredictions: any = null;

  constructor(private route: ActivatedRoute, public endpoint:AppEndpoints) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.startDate = params['startdate'];
      this.endDate = params['enddate'];
      console.log(`Received startdate: ${this.startDate}`);
      console.log(`Received enddate: ${this.endDate}`);
    });
    this.loadLocalStorage();

    if((this.lstartDate != this.startDate) || (this.lendDate != this.endDate)){
      console.log("1")
      this.get_predict();
    } else {
      console.log("2")
      this.dataPredictions = this.ldataPredictions;
      this.countSave();
    }

  }

  saveLocalStorage(){
    localStorage.setItem('startdate', this.startDate);
    localStorage.setItem('enddate', this.endDate);
    localStorage.setItem('dataPredictions', JSON.stringify(this.dataPredictions));
  }

  loadLocalStorage(){
    this.lstartDate = localStorage.getItem('startdate') || "";
    this.lendDate = localStorage.getItem('enddate') || "";
    this.ldataPredictions = JSON.parse(localStorage.getItem('dataPredictions') || "{}");
  }

  get_predict(){
    let payload = {
      start: this.startDate,
      end: this.endDate
    }

    let response:any = null;
    this.endpoint.get_predict_kp(payload).subscribe(
      data => response = data,
      err => {
        console.error(err)
      },
      () => {
        console.log("data", response)
        this.dataPredictions = response;
        this.countSave();
        this.saveLocalStorage();
      }
    )
  }

  countSave(){
    this.count1 = Object.keys(this.dataPredictions.G1).length;
    this.count2 = Object.keys(this.dataPredictions.G2).length;
    this.count3 = Object.keys(this.dataPredictions.G3).length;
    this.count4 = Object.keys(this.dataPredictions.G4).length;
  }

}
