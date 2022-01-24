import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class StyleComponent implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.el.nativeElement);
  }

}
