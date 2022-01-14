import {
  Component,
  ContentChild,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  @ContentChild('banner') banner: ElementRef;
  @ContentChild('accion') accion: ElementRef;
  @ContentChild('funciona') funciona: ElementRef;
  @ContentChild('nosotros') nosotros: ElementRef;
  @ContentChild('pymes') pymes: ElementRef;
  @ContentChild('whatsapp') whatsapp: ElementRef;
  @ContentChild('precios') precios: ElementRef;
  @ContentChild('servicios') servicios: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  oSomethingOnWindowsScroll($event: any) {
    const posTopView = $event.srcElement.children[0].scrollTop;
    const scrollPosition = posTopView + window.innerHeight - 400;

    this.sectionVisible(
      this.banner.nativeElement,
      this.banner.nativeElement.offsetTop,
      scrollPosition
    );
    this.sectionVisible(
      this.accion.nativeElement,
      this.accion.nativeElement.offsetTop,
      scrollPosition
    );
    this.sectionVisible(
      this.funciona.nativeElement,
      this.funciona.nativeElement.offsetTop,
      scrollPosition
    );
    this.sectionVisible(
      this.nosotros.nativeElement,
      this.nosotros.nativeElement.offsetTop,
      scrollPosition
    );
    this.sectionVisible(
      this.pymes.nativeElement,
      this.pymes.nativeElement.offsetTop,
      scrollPosition
    );
    this.sectionVisible(
      this.whatsapp.nativeElement,
      this.whatsapp.nativeElement.offsetTop,
      scrollPosition
    );
    this.sectionVisible(
      this.precios.nativeElement,
      this.precios.nativeElement.offsetTop,
      scrollPosition
    );
    this.sectionVisible(
      this.servicios.nativeElement,
      this.servicios.nativeElement.offsetTop,
      scrollPosition
    );
  }

  sectionVisible(section: any, position: any, scrollPosition: any) {
    if (position < scrollPosition)
      this.renderer.addClass(section, 'view-section');
    else this.renderer.removeClass(section, 'view-section');
  }

}
