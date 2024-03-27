import { Component, OnInit } from '@angular/core';
import { InverterService } from '../shared/service/inverter.service';

@Component({
  selector: 'app-high-capacity-inverters',
  templateUrl: './high-capacity-inverters.component.html',
  styleUrls: ['./high-capacity-inverters.component.css']
})
export class HighCapacityInvertersComponent implements OnInit {

  title: string = '';
  subtitle: string = '';
  cards: any[]= [];
  rows: any[] = [];
  sections: any[] = [];
  description: string = '';


  constructor(private InverterService: InverterService) {}

  ngOnInit() {
    this.InverterService.getHighCapacityInverterData().subscribe(res => {
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
