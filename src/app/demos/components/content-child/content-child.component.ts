import { Component, ContentChild, OnInit, ElementRef, ContentChildren, QueryList, TemplateRef } from '@angular/core';
import { ChidComponentComponent } from './chid-component/chid-component.component';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.scss']
})
export class ContentChildComponent implements OnInit {
  @ContentChild('list')private listEl1:ElementRef;
  @ContentChild('list',{static:true})private listEl:ElementRef;
  @ContentChildren('list')private listEls:QueryList<ElementRef>;
  @ContentChildren('span',{ descendants: true })private spanEl:QueryList<ElementRef>;
  @ContentChild(ChidComponentComponent)private chidComponentInstatnce:ChidComponentComponent;
  @ContentChild(ChidComponentComponent,{static:true})private chidComponentInstatnce2:ChidComponentComponent;
  @ContentChildren(ChidComponentComponent,{descendants:true})private chidComponentInstatnce2List:QueryList<ChidComponentComponent>;
  @ContentChild('lalala',{static:true,read:ChidComponentComponent})private lalalaInstatnce:ChidComponentComponent;
  @ContentChild('template',{static:true})private templateInstance:TemplateRef<any>;
  @ContentChild(TemplateRef)private templateInstance1:TemplateRef<any>;
  constructor() {
    console.log('constructor---this.listEl1---',this.listEl1);
    console.log('constructor---this.listEl---',this.listEl);
    console.log('constructor---this.listEls---',this.listEls);
    console.log('constructor---this.spanEl---',this.spanEl);
    console.log('constructor---this.chidComponentInstatnce---',this.chidComponentInstatnce);
    console.log('constructor---this.chidComponentInstatnce2---',this.chidComponentInstatnce2);
    console.log('constructor---this.chidComponentInstatnce2List---',this.chidComponentInstatnce2List);
    console.log('constructor---this.lalalaInstatnce---',this.lalalaInstatnce?.age);
    console.log('constructor---this.templateInstance---',this.templateInstance);
    console.log('constructor---this.templateInstance1---',this.templateInstance1);
  }


  ngOnInit(): void {
    console.log('ngOnInit---this.listEl1---',this.listEl1);
    console.log('ngOnInit---this.listEl---',this.listEl);
    console.log('ngOnInit---this.listEls---',this.listEls);
    console.log('ngOnInit---this.spanEl---',this.spanEl);
    console.log('ngOnInit---this.chidComponentInstatnce---',this.chidComponentInstatnce);
    console.log('ngOnInit---this.chidComponentInstatnce2---',this.chidComponentInstatnce2);
    console.log('ngOnInit---this.chidComponentInstatnce2List---',this.chidComponentInstatnce2List);
    console.log('ngOnInit---this.lalalaInstatnce---',this.lalalaInstatnce?.age);
    console.log('ngOnInit---this.templateInstance---',this.templateInstance);
    console.log('ngOnInit---this.templateInstance1---',this.templateInstance1);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit---this.listEl1---',this.listEl1);
    console.log('ngAfterViewInit---this.listEl---',this.listEl);
    console.log('ngAfterViewInit---this.listEls---',this.listEls);
    console.log('ngAfterViewInit---this.spanEl---',this.spanEl);
    console.log('ngAfterViewInit---this.chidComponentInstatnce---',this.chidComponentInstatnce);
    console.log('ngAfterViewInit---this.chidComponentInstatnce2---',this.chidComponentInstatnce2);
    console.log('ngAfterViewInit---this.chidComponentInstatnce2List---',this.chidComponentInstatnce2List);
    console.log('ngAfterViewInit---this.lalalaInstatnce---',this.lalalaInstatnce?.age);
    console.log('ngAfterViewInit---this.templateInstance---',this.templateInstance);
    console.log('ngAfterViewInit---this.templateInstance1---',this.templateInstance1);
  }

}
