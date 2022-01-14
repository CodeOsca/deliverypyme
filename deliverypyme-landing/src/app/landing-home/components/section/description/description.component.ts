import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-section',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  @Input() description: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
