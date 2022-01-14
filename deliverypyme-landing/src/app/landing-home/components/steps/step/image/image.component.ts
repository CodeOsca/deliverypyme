import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit, OnChanges {

  opacityImage: number = 0.3
  interval: any
  @Input() image: string = ''
  @Input() index: number
  @Input() animationPlay: boolean = true

  constructor() { }

  ngOnChanges() {
    if (this.animationPlay) {
      this.interval = setInterval(() => {
        this.opacityImage = 1
      }, this.index * 5000)
    } else {
      clearInterval(this.interval)
      this.opacityImage = 0.3
    }
  }

  ngOnInit(): void {
  }

}
