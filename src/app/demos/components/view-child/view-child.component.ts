import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {
  showChildOne = true;
  @ViewChild('box1')private box1El:ElementRef;
  @ViewChild('box1',{static:true})private box1El2:ElementRef;
  @ViewChild('box',{static:true})private boxel:ElementRef;
  @ViewChildren('box')private boxels:QueryList<ElementRef>;
  @ViewChild(PanelComponent)private panelComponent:PanelComponent;
  @ViewChild(PanelComponent,{static:true})private panelComponent2:PanelComponent;
  @ViewChild('panel',{read:PanelComponent})private panelComponentInstatnce:PanelComponent;
  @ViewChild('panel',{static:true,read:PanelComponent})private panelComponentInstatnce2:PanelComponent;
  @ViewChild('panel',{static:true})private panelInstance2:PanelComponent;
  @ViewChildren(PanelComponent)private panelInstances: QueryList<PanelComponent>;
  constructor() {
    console.log('constructor this.box1El',this.box1El);
    console.log('constructor this.box1El2',this.box1El2);
    console.log('constructor this.panelComponent',this.panelComponent);
    console.log('constructor this.panelComponent2',this.panelComponent2);
    console.log('constructor this.panelComponentInstatnce',this.panelComponentInstatnce);
    console.log('constructor this.panelComponentInstatnce2',this.panelComponentInstatnce2);
    console.log('constructor this.boxels ',this.boxels);
  }

  ngOnInit(): void {
    console.log('ngOnInit this.box1El',this.box1El);
    console.log('ngOnInit this.box1El2',this.box1El2);
    console.log('ngOnInit this.panelComponent',this.panelComponent);
    console.log('ngOnInit this.panelComponent2',this.panelComponent2);
    console.log('ngOnInit this.panelComponentInstatnce',this.panelComponentInstatnce);
    console.log('ngOnInit this.panelComponentInstatnce2',this.panelComponentInstatnce2);
    console.log('ngOnInit this.boxels ',this.boxels);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit this.box1El',this.box1El);
    console.log('ngAfterViewInit this.box1El2',this.box1El2);
    console.log('ngAfterViewInit this.panelComponent',this.panelComponent);
    console.log('ngAfterViewInit this.panelComponent2',this.panelComponent2);
    console.log('ngOnInit this.panelComponentInstatnce',this.panelComponentInstatnce);
    console.log('ngOnInit this.panelComponentInstatnce2',this.panelComponentInstatnce2);
    console.log('------------');
    console.log('ngAfterViewInit this.boxel.nativeElement ',this.boxel.nativeElement);
    console.log('ngAfterViewInit this.boxels ',this.boxels);
    console.log('ngAfterViewInit this.panelInstance2 ',this.panelInstance2);
    console.log('ngAfterViewInit this.panelInstances',this.panelInstances);
    console.log('------------');
    this.panelInstances.changes.subscribe(changes => {
      console.log('changes',changes);
    })
  }

}
