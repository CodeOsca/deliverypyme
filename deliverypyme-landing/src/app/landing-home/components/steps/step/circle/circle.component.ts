import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit, OnChanges {

  borderColor: string = 'transparent'
  opacityImage: number = 0.3
  interval: any
  @Input() icon: string = ''
  @Input() index: number
  @Input() medium: boolean = false
  @Input() animationPlay: boolean = true

  constructor() { }

  ngOnChanges() {
    if (this.animationPlay) {
      this.interval = setInterval(() => {
        this.borderColor = 'var(--color-primary)'
        this.opacityImage = 1
      }, this.index * 5000)
    } else {
      clearInterval(this.interval)
      this.borderColor = 'transparent'
      this.opacityImage = 0.3
    }
  }

  ngOnInit(): void {
  }

}
