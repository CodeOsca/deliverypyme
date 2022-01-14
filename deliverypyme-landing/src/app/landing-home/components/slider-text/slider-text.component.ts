import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-text',
  templateUrl: './slider-text.component.html',
  styleUrls: ['./slider-text.component.scss']
})
export class SliderTextComponent implements OnInit {

  position: number = 0;
  marginTop: number = 0;
  @Input() listText: string[] = []
  @Input() height: number = 200
  @Input() time: number = 3000
  @Input() fontSize: string = '2.5rem'
  @Input() bold: boolean = true

  constructor() { }

  ngOnInit(): void {
    const MAX = this.listText.length - 1
    const MIN = 0
    let valueCalculate = 1
    setInterval(() => {
      this.marginTop = this.position * this.height
      this.position += valueCalculate
      if (this.position === MAX) valueCalculate = -1
      if (this.position === MIN) valueCalculate = 1
    }, this.time)
  }

}
