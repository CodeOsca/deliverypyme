import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Input() title: string = ''
  @Input() description: string = ''
  @Input() image: string = ''
  @Input() revert: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
