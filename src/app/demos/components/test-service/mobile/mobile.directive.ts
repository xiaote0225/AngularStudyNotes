import { Directive } from '@angular/core';

@Directive({
  selector: '[appMobile]',
  providers:[{provide:'flowerToken',useValue:{emoji:'flowerToken'}}]
})
export class MobileDirective {

  constructor() {
    console.log('这是mobile指令');
  }

}
