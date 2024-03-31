import { Component, OnInit } from '@angular/core';
import { OnlineUpsService } from '../shared/service/online-ups.service';

@Component({
  selector: 'app-online-ups',
  templateUrl: './online-ups.component.html',
  styleUrls: ['./online-ups.component.css']
})
export class OnlineUpsComponent implements OnInit {


  title: string = '';
  subtitle: string = '';
  cards: any[]= [];
  rows: any[] = [];
  sections: any[] = [];
  description: string = '';


  constructor(private upsService: OnlineUpsService) {}

  ngOnInit() {
    this.upsService.getOnlineUPSData().subscribe(res => {
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
