import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent implements OnInit {

  @Input() background: string = 'var(--color-primary)'
  @Input() color: string = 'var(--color-white)'
  @Input() bold: boolean = false
  @Input() disabled: boolean = false
  @Input() type: string = 'button'
  @Input() width: string = 'auto'
  @Input() position: string = 'center'
  @Output() handleClick = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.handleClick.emit(true)
  }

}
