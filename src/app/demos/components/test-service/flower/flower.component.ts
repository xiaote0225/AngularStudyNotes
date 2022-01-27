import { FlowerService } from './../flower.service';
import { APP_CONFIG } from './../../../../configs/types';
import { LoggerService } from 'src/app/services/logger.service';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower',
  template: `
    <p>
      flower works!
    </p>
  `,
  styles: [
  ]
})
export class FlowerComponent implements OnInit {

  constructor(
    private LoggerServe:LoggerService,
    @Inject('httpApi') private uri:string,
    @Inject(APP_CONFIG) private tokenValue:string,
    private flowerServe:FlowerService
  ) { }

  ngOnInit(): void {
    this.flowerServe.logFlower();
  }

}
