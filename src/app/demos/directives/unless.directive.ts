import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
export class UnlessContext{
  $implicit:boolean = true;
  appUnless:boolean = true;
  attr:string = '';
}
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  private hasView = false;
  private context = new UnlessContext();
  @Input()
  set appUnless(condition:boolean){
    this.context.$implicit = this.context.appUnless = condition;
    this.context.attr = 'jsajfl';
    if(!condition && !this.hasView){
      this.viewContainer.createEmbeddedView(this.templateRef,this.context);
      this.hasView = true;
    }else if(condition && this.hasView){
      this.viewContainer.clear();
      this.hasView = false;
    }
  }

  constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef) {
    console.log('appUnless');
    console.log('templateRef',templateRef);
    console.log('viewContainer',viewContainer);
  }

}
