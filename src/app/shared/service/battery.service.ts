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

  public postForm(formData: any): Observable<any> {
    const plainFormData: any = this.extractFormData(formData);
    return this.http.post('https://formspree.io/f/xayrppek', formData);
  }

  private extractFormData(formData: any): any {
    let plainFormData: any = {};
    Object.keys(formData.controls).forEach(key => {
      plainFormData[key] = formData.controls[key].value;
    });
    return plainFormData;
  }
}