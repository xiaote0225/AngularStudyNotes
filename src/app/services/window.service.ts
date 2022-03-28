import { isPlatformBrowser } from '@angular/common';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  private isBrowser:boolean;
  constructor(@Inject(PLATFORM_ID) private platformId:object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    console.log('isBrowser',this.isBrowser);
  }
  alert(message:string):void{
    if(this.isBrowser){
      alert(message);
    }
  }

  setStorage(key:string,value:string):void{
    if(this.isBrowser){
      localStorage.setItem(key,value);
    }
  }

  getStorage(key:string):string | null | undefined{
    if(this.isBrowser){
      return localStorage.getItem(key);
    }
  }

  removeStorage(key:string):void{
    if(this.isBrowser){
      localStorage.removeItem(key);
    }
  }

  clearStorage():void{
    if(this.isBrowser){
      localStorage.clear();
    }
  }


}
