import { Component, OnInit, Input } from '@angular/core';

import { NAVIGATION } from '../../constants/navigation.constant';
import { Navigation } from '../../interfaces/navigation';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  navigation: Navigation[] = NAVIGATION

  @Input() showNav: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
