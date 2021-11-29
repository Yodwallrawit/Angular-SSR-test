import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './pages/page';

const routes: Routes = [
  // {path: ':shop_id/:page_id',component:HomeComponent},
  {path: ':region/:province/:shopId/:pageId',component:HomeComponent},
  // {path: ':region/:province/:shopId/:pageId',component:HomeComponent},
  {path: '**', component: ErrorPageComponent},
  {
    path: "**",
    redirectTo: ""
   }
  // {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent,ErrorPageComponent]
// central/bangkok/ais0001---เอไอเอสช็อป_สาขาเซ็นทรัลเวิลด์_(ชั้น_4)/53---test2