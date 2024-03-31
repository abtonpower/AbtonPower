import { Component, OnInit } from '@angular/core';
import { SolarService } from '../shared/service/solar.service';

@Component({
  selector: 'app-solar-pcu',
  templateUrl: './solar-pcu.component.html',
  styleUrls: ['./solar-pcu.component.css']
})
export class SolarPcuComponent implements OnInit {


  title: string = '';
  subtitle: string = '';
  cards: any[]= [];
  rows: any[] = [];
  sections: any[] = [];
  description: string = '';


  constructor(private solarService: SolarService) {}

  ngOnInit() {
    this.solarService.getSolarPCUData().subscribe(res => {
      this.title = res.title;
      this.subtitle = res?.subtitle;
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
