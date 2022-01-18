import { Component, EmbeddedViewRef, OnInit, SimpleChanges, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-tpl-container',
  templateUrl: './tpl-container.component.html',
  styleUrls: ['./tpl-container.component.scss']
})
export class TplContainerComponent implements OnInit {
  @ViewChild('firstContainer',{read:ViewContainerRef,static:true})readonly firstContain:ViewContainerRef;
  @ViewChild('secondContainer',{read:ViewContainerRef,static:true})readonly secondContain:ViewContainerRef;
  @ViewChild('firstTpl',{read:TemplateRef,static:true}) readonly firstTpl: TemplateRef<any>;
  @ViewChild('secondTpl',{read:TemplateRef}) readonly secondTpl: TemplateRef<any>;
  @ViewChild('thirdTpl',{read:TemplateRef}) readonly thirdTpl: TemplateRef<any>;
  @ViewChild('fourthTpl',{read:TemplateRef}) readonly fourthTpl: TemplateRef<any>;
  @ViewChild('freeTpl',{read:TemplateRef}) readonly freeTpl: TemplateRef<any>;

  context = {$implicit:'world',name:'dema'}


  private freeViewRef:EmbeddedViewRef<any>;

  insert(tpl:TemplateRef<any>):void{
    this.firstContain.insert(tpl.createEmbeddedView(this.context));
  }
  insertAll():void{
    [this.secondTpl,this.thirdTpl,this.fourthTpl].forEach(tpl => {
      this.firstContain.insert(tpl.createEmbeddedView(this.context));
    });
  }

  insertFree():void{
    this.firstContain.insert(this.freeViewRef,1);
  }

  getOne():void{
    console.log(this.firstContain.get(2));
    console.log(this.firstContain.indexOf(this.freeViewRef));
  }

  move() {
    // 不需要事先插入也可以移动(定好位置再插入)
    this.firstContain.move(this.freeViewRef, 2);
  }

  move2To4():void{
    const view = this.firstContain.detach(1);
    this.firstContain.insert(view!,3);
  }

  move2ToOther() {
    const view = this.firstContain.detach(1);
    this.secondContain.insert(view!);
  }

  constructor() {
    // console.log('constructor------------');
    // console.log('firstContain',this.firstContain);
    // console.log('secondContain',this.secondContain);
    // console.log('firstTpl',this.firstTpl);
    // console.log('secondTpl',this.secondTpl);
    // console.log('thirdTpl',this.thirdTpl);
    // console.log('fourthTpl',this.fourthTpl);
    // console.log('freeTpl',this.freeTpl);
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('changes------------');
  //   console.log('firstContain',this.firstContain);
  //   console.log('secondContain',this.secondContain);
  //   console.log('firstTpl',this.firstTpl);
  //   console.log('secondTpl',this.secondTpl);
  //   console.log('thirdTpl',this.thirdTpl);
  //   console.log('fourthTpl',this.fourthTpl);
  //   console.log('freeTpl',this.freeTpl);
  // }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit------------');
    this.freeViewRef = this.freeTpl.createEmbeddedView(null);
    // console.log('firstContain',this.firstContain);
    // console.log('secondContain',this.secondContain);
    // console.log('firstTpl',this.firstTpl);
    // console.log('secondTpl',this.secondTpl);
    // console.log('thirdTpl',this.thirdTpl);
    // console.log('fourthTpl',this.fourthTpl);
    // console.log('freeTpl',this.freeTpl);
    setTimeout(() => {
      this.firstContain.createEmbeddedView(this.firstTpl);
      this.firstContain.createEmbeddedView(this.secondTpl,this.context);
    },0);
  }

  ngOnInit(): void {
  }

}
