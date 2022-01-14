import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { COMO_FUNCIONA } from '../../constants/comoFunciona.constant';
import { ACCIONES } from '../../constants/acciones.constant';
import { INFO_CARD } from '../../constants/infoCard.constant';
import { COMMUNES_1, COMMUNES_2 } from '../../constants/communes.constant';
import { ComoFunciona } from '../../interfaces/comoFunciona';
import { InfoCard } from '../../interfaces/info-card';
import { Communes } from '../../interfaces/communes';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  comoFunciona: ComoFunciona[] = COMO_FUNCIONA
  acciones: ComoFunciona[] = ACCIONES
  infoCard: InfoCard[] = INFO_CARD
  communes1: Communes = COMMUNES_1
  communes2: Communes = COMMUNES_2
  is767: boolean = false
  isActionAccion: boolean = false
  isActionFunciona: boolean = false
  // columns: number = 2

  @ViewChild('accion') accion: ElementRef;
  @ViewChild('funciona') funciona: ElementRef;
  // @ViewChild('masonryLayout') masonryLayout: ElementRef;

  constructor(
    public breakObsrv: BreakpointObserver,
    // private renderer: Renderer2,
    public element: ElementRef
  ) { }

  ngOnInit(): void {
    this.breakObsrv
      .observe([
        // '(max-width: 899px)',
        '(max-width: 767px)',
        '(orientation: portrait)',
        '(orientation: landscape)',
      ])
      .subscribe((lay) => {
        this.is767 = lay.breakpoints['(max-width: 767px)'];
        // this.columns = lay.breakpoints['(max-width: 899px)'] ? 1 : 2;
      });
  }

  // ngAfterViewInit() {
  //   this.masonryLayoutFunction(this.masonryLayout.nativeElement, this.element.nativeElement.querySelectorAll('.masonry-item'), this.columns)
  // }

  // masonryLayoutFunction(containerElement, itemsElements, columns) {
  //   this.renderer.addClass(containerElement, 'masonry-layout');
  //   this.renderer.addClass(containerElement, `columns-${columns}`);
  //   let columnsElements: any[] = []

  //   for (let i = 1; i <= columns; i++) {
  //     let column = this.renderer.createElement('div')
  //     this.renderer.addClass(column, 'masonry-column')
  //     this.renderer.addClass(column, `column-${i}`)
  //     this.renderer.appendChild(containerElement, column)
  //     columnsElements.push(column)
  //   }

  //   for (let m = 0; m < Math.ceil(itemsElements.length / columns); m++) {
  //     for (let n = 0; n < columns; n++) {
  //       if (!itemsElements[m * columns + n]) break
  //       this.renderer.appendChild(columnsElements[n], itemsElements[m * columns + n])
  //     }
  //   }
  // }

  @HostListener('window:scroll', ['$event'])
  oSomethingOnWindowsScroll($event: any) {
    const posTopView = $event.srcElement.children[0].scrollTop;
    const scrollPosition = posTopView + window.innerHeight - 400;

    this.isActionAccion = this.sectionVisible(
      this.accion.nativeElement.offsetTop,
      scrollPosition
    );
    this.isActionFunciona = this.sectionVisible(
      this.funciona.nativeElement.offsetTop,
      scrollPosition
    );
  }

  sectionVisible(position: any, scrollPosition: any) {
    return (position < scrollPosition)
  }

}
