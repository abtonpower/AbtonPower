import { Component, OnInit } from '@angular/core';
import { BatteryService } from '../shared/service/battery.service';

@Component({
  selector: 'app-smf-battery',
  templateUrl: './smf-battery.component.html',
  styleUrls: ['./smf-battery.component.css']
})
export class SMFBatteryComponent implements OnInit {
  title: string = '';
  subtitle: string = '';
  cards: any[]= [];
  rows: any[] = [];
  sections: any[] = [];
  description: string = '';

  constructor(private batteryService: BatteryService) {}

  ngOnInit() {
    this.batteryService.getSMFBatteryData().subscribe(res => {
      this.title = res.title;
      this.subtitle = res.subtitle;
      this.cards = res.data;
      this.sections = res.description;
      this.rows = this.chunkArray(this.cards, 4);
    });
  }
  chunkArray(arr: any, size: any) {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  }
}
