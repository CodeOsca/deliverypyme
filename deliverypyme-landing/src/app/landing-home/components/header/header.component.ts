import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerScroll: boolean = false;
  showNav: boolean = false;

  @HostListener('window:scroll', ['$event'])
  doSomethingOnWindowsScroll($event: any) {
    this.headerScroll = $event.srcElement.children[0].scrollTop > 50;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
