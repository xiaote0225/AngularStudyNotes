import { BetterLoggerService } from 'src/app/services/better-logger.service';
import { Injectable } from '@angular/core';

@Injectable()
export class FlowerService {
  private flower:string;
  constructor(private betterlogServe:BetterLoggerService) {
    this.flower = this.betterlogServe.flower;
  }
  logFlower(){
    console.log('这是'+this.flower);
  }
}
