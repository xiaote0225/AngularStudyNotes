import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(str: string,event: MouseEvent):void{
    console.log('onClick',str);
    console.log('onClick event',event);
    console.log('onClick event.target',event.target);
  }

  clickParent():void{
    console.log('clickParent');
  }

  clickChildren(event:MouseEvent):void{
    event.stopPropagation();
    console.log('clickChildren');
  }

  onInput(event: Event):void{
    console.log('onInput',event.target);
    console.log('onInput',(event.target as HTMLInputElement).value);
  }
}
