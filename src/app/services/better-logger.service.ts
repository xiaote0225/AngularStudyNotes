import { Injectable } from '@angular/core';

@Injectable()
export class BetterLoggerService {
  flower:string = 'BetterLoggerService flower';
  constructor() { }

  log(message:string){
    console.log('===BetterLoggerService1 message ',message);
  }

  otherLog(message:string){
    console.log('==BetterLoggerService1 otherLog message ',message);
  }
}
