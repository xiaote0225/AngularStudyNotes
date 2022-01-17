import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = 'yellow';

  constructor(private el:ElementRef) {
    console.log('constructor',this.el);
  }

  @HostListener('mouseenter',['$event'])
  onMouseEnter(event:MouseEvent){
    console.log('event',event);
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.highlight('');
  }

  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
