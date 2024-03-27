import { Component, OnInit } from '@angular/core';
import { InverterService } from '../shared/service/inverter.service';

@Component({
  selector: 'app-home-ups',
  templateUrl: './home-ups.component.html',
  styleUrls: ['./home-ups.component.css']
})
export class HomeUpsComponent implements OnInit {

  title: string = '';
  subtitle: string = '';
  cards: any[]= [];
  rows: any[] = [];
  sections: any[] = [];
  description: string = '';


  constructor(private inverterService: InverterService) {}

  ngOnInit() {
    this.inverterService.getHomeUPSInverterData().subscribe(res => {
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
