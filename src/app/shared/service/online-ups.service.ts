import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnlineUpsService {

  constructor(
    private http: HttpClient
  ) { }

  public getOnlineUPSData(): Observable<any> {
    return this.http.get<any>('assets/online-ups/online-ups-data.json');
  }

}
