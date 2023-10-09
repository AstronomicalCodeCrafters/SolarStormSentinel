import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
  item: any = null;
  name: string = "";
  dataPredictions: any = null;
  dateArray: any = null;
  infoScale: Array<any> = [];
  actualInfoScale: any = null;
  lstartDate: string = "";
  lendDate: string = "";
  
  private sub: any;

  modalRef?: BsModalRef;

  constructor(private route: ActivatedRoute, private router: Router, private modalService: BsModalService) {
    this.loadLocalStorage();
    this.loadInfoScales();
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      //load item
      this.name = params['scale'];
      let datesObject = this.dataPredictions[this.name];
      this.dateArray = Object.entries(datesObject);

      this.item = {
        images: [
          "/assets/images/sections/sun.png",
        ],
        src: "/assets/images/sections/sun.png",
      }
      this.setInfo();
    });
  }

  isArray(obj: any) {
    return Array.isArray(obj)
  }

  loadLocalStorage(){
    this.lstartDate = localStorage.getItem('startdate') || "";
    this.lendDate = localStorage.getItem('enddate') || "";
    this.dataPredictions = JSON.parse(localStorage.getItem('dataPredictions') || "{}");
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setInfo(){
    this.actualInfoScale = this.infoScale.find((element) => element.scale == this.name);
  }

  loadInfoScales(){
    this.infoScale = [
      {
        scale: "G1",
        description: "Minor",
        effect: [//HF Radio, Navigation
          "Weak or minor degradation of HF radio communication on sunlit side, occasional loss of radio contact.",
          "Low-frequency navigation signals degraded for brief intervals."
        ],
        average: "Less than 1 per cycle",
        recommendation: "During G1 geomagnetic storms, it's crucial to stay informed about space weather conditions. Monitoring space weather forecasts and alerts provided by organizations like NOAA (National Oceanic and Atmospheric Administration) is essential. Subscribing to alerts and notifications can be particularly useful if you live in regions prone to geomagnetic storms. Additionally, take precautions to protect sensitive electronic equipment such as computers and televisions. Unplugging them during a storm or using surge protectors can prevent damage. Remember to back up important data regularly to avoid data loss due to potential power surges or equipment issues."
      },
      {
        scale: "G2",
        description: "Moderate",
        effect: [//HF Radio, Navigation
          "Limited blackout of HF radio communication on sunlit side, loss of radio contact for tens of minutes.",
          "Degradation of low-frequency navigation signals for tens of minutes."
        ],
        average: "350 per cycle (300 days per cycle)",
        recommendation: "G2 geomagnetic storms can have a more significant impact, so preparedness is crucial. Stay informed through space weather forecasts and alerts from reputable sources like NOAA. Consider unplugging sensitive electronic equipment during the storm or using surge protectors to prevent damage. It's vital to have backup power sources such as generators or uninterruptible power supplies (UPS) for critical devices. Stock up on essential items like flashlights, batteries, and non-perishable food to ensure you're ready for potential power outages."
      },
      {
        scale: "G3",
        description: "Strong",
        effect: [//HF Radio, Navigation
          "Wide area blackout of HF radio communication, loss of radio contact for about an hour on sunlit side of Earth.",
          "Low-frequency navigation signals degraded for about an hour."
        ],
        average: "175 per cycle (140 days per cycle)",
        recommendation: "G3 geomagnetic storms can have a significant impact, and preparedness is essential. Stay well-informed through space weather forecasts and alerts from reputable sources like NOAA (National Oceanic and Atmospheric Administration). During such storms, consider taking precautionary measures such as unplugging sensitive electronic equipment and using surge protectors to prevent damage. Ensure you have reliable backup power sources like generators or uninterruptible power supplies (UPS) available, particularly for critical devices. Stock up on essential items, including flashlights, batteries, and non-perishable food, to prepare for potential power outages and disruptions."
      },
      {
        scale: "G4",
        description: "Severe",
        effect: [//HF Radio, Navigation
          "HF radio communication blackout on most of the sunlit side of Earth for one to two hours. HF radio contact lost during this time.",
          "Outages of low-frequency navigation signals cause increased error in positioning for one to two hours. Minor disruptions of satellite navigation possible on the sunlit side of Earth."
        ],
        average: "8 per cycle (8 days per cycle)",
        recommendation: "G4 geomagnetic storms are severe and require thorough preparedness. Stay well-informed through space weather forecasts and alerts from authoritative sources like NOAA (National Oceanic and Atmospheric Administration). Given the heightened risk, take proactive measures during such storms, including unplugging sensitive electronic equipment and employing surge protectors to safeguard against damage. It's imperative to have robust backup power sources such as generators or uninterruptible power supplies (UPS) in place, especially for critical systems. Prioritize stocking up on essential supplies like flashlights, batteries, and non-perishable food to prepare for potential prolonged power outages and service disruptions."
      },
      {
        scale: "G5",
        description: "Extreme",
        effect: [//HF Radio, Navigation
          "Complete HF (high frequency) radio blackout on the entire sunlit side of the Earth lasting for a number of hours. This results in no HF radio contact with mariners and en route aviators in this sector.",
          "Low-frequency navigation signals used by maritime and general aviation systems experience outages on the sunlit side of the Earth for many hours, causing loss in positioning. Increased satellite navigation errors in positioning for several hours on the sunlit side of Earth, which may spread into the night side."
        ],
        average: "Less than 1 per cycle",
        recommendation: "G5 geomagnetic storms are extremely severe and require utmost preparedness. Stay well-informed through space weather forecasts and alerts from reputable sources like NOAA (National Oceanic and Atmospheric Administration). Given the unprecedented intensity, take immediate and comprehensive precautions during such storms. Unplug all sensitive electronic equipment and employ surge protectors to safeguard against potential damage. Ensure you have robust and uninterrupted backup power sources, such as generators or uninterruptible power supplies (UPS), especially for critical systems. Prioritize stocking up on essential supplies like flashlights, batteries, and non-perishable food to prepare for prolonged power outages and service disruptions."
      },
    ]
  }
}
