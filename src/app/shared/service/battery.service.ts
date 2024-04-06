import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatteryService {

  constructor(
    private http: HttpClient
  ) { }

  public getSMFBatteryData(): Observable<any> {
    return this.http.get<any>('assets/batteries/batteries-data.json');
  }

  public getBatteryInverterData(): Observable<any> {
    return this.http.get<any>('assets/Batteries Inverter/inverter-batteries-data.json');
  }
}