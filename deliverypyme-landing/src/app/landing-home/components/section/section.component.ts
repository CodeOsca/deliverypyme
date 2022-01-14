import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() background: string = 'var(--color-white)';
  @Input() separatorTop: boolean = false;
  @Input() separatorBottom: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
