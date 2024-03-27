import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InverterService {

  constructor(
    private http: HttpClient
  ) { }

  public getHomeUPSInverterData(): Observable<any> {
    return this.http.get<any>('assets/home-ups/home-ups-data.json');
  }

  public getHighCapacityInverterData(): Observable<any> {
    return this.http.get<any>('assets/high-capacity-inverters/high-capacity-inverters-data.json');
  }
}
