import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { fas, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './views/landing/landing.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ChartComponent } from './components/chart/chart.component';
import { HomeComponent } from './views/home/home.component';
import { TypesgComponent } from './views/typesg/typesg.component';
import { ItemComponent } from './views/item/item.component';
import { DatesComponent } from './views/dates/dates.component';
import { ListPredictionsComponent } from './views/list-predictions/list-predictions.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BannerComponent,
    NavbarComponent,
    SidenavComponent,
    ChartComponent,
    HomeComponent,
    TypesgComponent,
    ItemComponent,
    DatesComponent,
    ListPredictionsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    MdbAccordionModule,
    FormsModule,
    TabsModule.forRoot(),
    RatingModule.forRoot(),
    ModalModule.forRoot(),
    NgxMaskModule.forRoot(maskConfig),
    CarouselModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faBagShopping, faBars)
    library.addIconPacks(fab, far, fas)
  }
}
