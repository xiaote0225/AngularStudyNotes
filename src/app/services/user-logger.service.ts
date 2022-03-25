import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoggerService extends LoggerService{

  constructor(private userService:UserService) {
    super();
    console.log('--------------userService123',userService);
  }
  log(message:string):void{
    // const name = this.userService.user.name;
    // super.log(`---------Message to ${name}:${message}`);
    // console.log('-------------userService',this.userService);
  }
}
