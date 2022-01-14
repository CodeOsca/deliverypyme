import { Component, Input, OnInit } from '@angular/core';
import { ComoFunciona } from 'src/app/landing-home/interfaces/comoFunciona';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  width: string = 'calc(100% + 4rem)'
  left: string = '-2rem'
  velocityAnimation: string = '5s'
  @Input() value: ComoFunciona
  @Input() index: number
  @Input() total: number
  @Input() line: boolean = true
  @Input() animationPlay: boolean = true

  constructor() { }

  ngOnInit(): void {
  }

  verificateLeft() {
    return (this.index === 0) ? '50%' : this.left
  }

  verificateWidth() {
    return (this.index === 0 || this.index === this.total) ? 'calc(50% + 2rem)' : this.width
  }

  verificateAnimationTime() {
    return (this.index === 0 || this.index === this.total) ? '5s' : this.velocityAnimation
  }

}
