import { Component, Input, OnInit } from '@angular/core';
import { ComoFunciona } from '../../interfaces/comoFunciona';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  @Input() values: ComoFunciona[] = []
  @Input() line: boolean = true
  @Input() animationPlay: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

}
