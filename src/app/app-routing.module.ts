import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeUpsComponent } from './home-ups/home-ups.component';
import { HighCapacityInvertersComponent } from './high-capacity-inverters/high-capacity-inverters.component';
import { SMFBatteryComponent } from './smf-battery/smf-battery.component';
import { OnlineUpsComponent } from './online-ups/online-ups.component';
import { BatteriesInverterComponent } from './batteries-inverter/batteries-inverter.component';
import { SolarPanelsComponent } from './solar-panels/solar-panels.component';
import { SolarPcuComponent } from './solar-pcu/solar-pcu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-ups', component:HomeUpsComponent},
  { path: 'high-capacity-inverters', component:HighCapacityInvertersComponent},
  { path: 'smf-battery', component: SMFBatteryComponent},
  { path: 'online-ups', component: OnlineUpsComponent},
  { path: 'inverter-battery', component: BatteriesInverterComponent},
  { path: 'solar-pcu', component: SolarPcuComponent},
  { path: 'solar-panels', component: SolarPanelsComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
