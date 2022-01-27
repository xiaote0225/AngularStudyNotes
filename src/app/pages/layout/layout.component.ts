import { AppConfig, APP_CONFIG } from './../../configs/types';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { BetterLoggerService } from 'src/app/services/better-logger.service';
import { LoggerService } from 'src/app/services/logger.service';
import { UserLoggerService } from 'src/app/services/user-logger.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers:[LoggerService]
})
export class LayoutComponent implements OnInit {

  constructor(private loggerService:LoggerService,private betterLoggerService:BetterLoggerService,@Inject('httpApi') readonly api:string,@Inject(APP_CONFIG) config:AppConfig,private userLoggerService:UserLoggerService) {
    console.log('loggerService',loggerService);
    console.log('betterLoggerService',betterLoggerService);
    console.log('config.apiEndpoint ',config.apiEndpoint,' config.title ',config.title);
  }

  ngOnInit(): void {
    // this.loggerService.log('layout');
    console.log('loggerService',this.loggerService);
    console.log('api',this.api);
    this.userLoggerService.log('1234567686');
  }

}
