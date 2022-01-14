import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit, OnChanges {

  color: string = 'var(--color-grey)'
  interval: any
  @Input() description: string = ''
  @Input() index: number
  @Input() animationPlay: boolean = true

  constructor() { }

  ngOnChanges() {
    if (this.animationPlay) {
      this.interval = setInterval(() => {
        this.color = 'var(--color-black)'
      }, this.index * 5000)
    } else {
      clearInterval(this.interval)
      this.color = 'var(--color-grey)'
    }
  }

  ngOnInit(): void {
  }

}
