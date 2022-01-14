import { Component, Input, OnInit } from '@angular/core';
import { Communes } from '../../interfaces/communes';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.scss']
})
export class PreciosComponent implements OnInit {

  @Input() communes: Communes;

  constructor() { }

  ngOnInit(): void {
  }

}
