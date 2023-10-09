import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from "./views/landing/landing.component";
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { HomeComponent } from './views/home/home.component';
import { TypesgComponent } from './views/typesg/typesg.component';
import { ItemComponent } from './views/item/item.component';
import { DatesComponent } from './views/dates/dates.component';
import { ListPredictionsComponent } from './views/list-predictions/list-predictions.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'welcome',
    component: TypesgComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dates',
    component: DatesComponent,
  },
  {
    path: 'predictions',
    component: ListPredictionsComponent,
  },
  {
    path: 'geostorm/:scale',
    component: ItemComponent,
  },
  {
    path: 'categoria/:sectionId/producto/:id',
    component: ItemComponent,
  },
  {
    path: 'typesg',
    component: TypesgComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
