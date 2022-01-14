import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { BANNER_TEXT } from '../../constants/bannerText.constant';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  listTitle: string[] = BANNER_TEXT
  is767: boolean = false;
  is419: boolean = false;
  height: number = 200
  fontSize: string = '2.5rem'

  constructor(
    public breakObsrv: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.breakObsrv
      .observe([
        '(max-width: 767px)',
        '(max-width: 419px)',
        '(orientation: portrait)',
        '(orientation: landscape)',
      ])
      .subscribe((lay) => {
        this.is767 = lay.breakpoints['(max-width: 767px)'];
        this.is419 = lay.breakpoints['(max-width: 419px)'];
        if (this.is767) {
          this.height = 150
          this.fontSize = '1.8rem'
        }
        if (this.is767) {
          this.height = 150
          this.fontSize = '1.4rem'
        }
      });
  }

}
