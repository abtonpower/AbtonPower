import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { HomeUpsComponent } from './home-ups/home-ups.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { HighCapacityInvertersComponent } from './high-capacity-inverters/high-capacity-inverters.component';
import { SMFBatteryComponent } from './smf-battery/smf-battery.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BatteriesInverterComponent } from './batteries-inverter/batteries-inverter.component';
import { OnlineUpsComponent } from './online-ups/online-ups.component';
import { SolarPcuComponent } from './solar-pcu/solar-pcu.component';
import { SolarPanelsComponent } from './solar-panels/solar-panels.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeUpsComponent,
    HighCapacityInvertersComponent,
    SMFBatteryComponent,
    BatteriesInverterComponent,
    OnlineUpsComponent,
    SolarPcuComponent,
    SolarPanelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatMenuModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
