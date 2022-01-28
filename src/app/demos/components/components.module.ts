import { PipeModule } from './../pipes/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { Style1Component } from './style1/style1.component';
import { StyleComponent } from './style/style.component';
import { ChangeGrandsonComponent } from './change-detection/change-grandson/change-grandson.component';
import { ChangeChildComponent } from './change-detection/change-child/change-child.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { PipeComponent } from './pipe/pipe.component';
import { ChidComponentComponent } from './content-child/chid-component/chid-component.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { PanelComponent } from './content-child/panel/panel.component';
import { ShadowComponent } from './shadow/shadow.component';
import { TplOutletComponent } from './tpl-outlet/tpl-outlet.component';
import { TplContainerComponent } from './tpl-container/tpl-container.component';
import { ExampleComponent } from '../example/example.component';
import { StructuralComponent } from './structural/structural.component';
import { TransferPanelComponent } from 'src/app/transfer-panel/transfer-panel.component';
import { SizerComponent } from 'src/app/sizer/sizer.component';
import { FormsModule } from '@angular/forms';
import { FlowerComponent } from './test-service/flower/flower.component';
import { MobileItemComponent } from './test-service/mobile/mobile-item/mobile-item.component';
import { MobileContentComponent } from './test-service/mobile/mobile-list/mobile-content/mobile-content.component';
import { listToken, MobileListComponent } from './test-service/mobile/mobile-list/mobile-list.component';
import { MobileComponent } from './test-service/mobile/mobile.component';
import { MobileDirective } from './test-service/mobile/mobile.directive';
import { ChangeComponent } from './change-detection/change/change.component';
import { AlexComponent } from './test-service/alex/alex.component';
import { CarolComponent } from './test-service/alex/carol/carol.component';
import { CathyComponent } from './test-service/alex/cathy/cathy.component';
import { CraigComponent } from './test-service/alex/craig/craig.component';

const declarations = [
  SizerComponent,
  TransferPanelComponent,
  StructuralComponent,
  ExampleComponent,
  TplContainerComponent,
  TplOutletComponent,
  ShadowComponent,
  PanelComponent,
  ViewChildComponent,
  ContentChildComponent,
  ChidComponentComponent,
  PipeComponent,
  LifeCycleComponent,
  ChangeChildComponent,
  ChangeGrandsonComponent,
  ChangeComponent,
  StyleComponent,
  Style1Component,
  AlertComponent,
  FlowerComponent,
  MobileItemComponent,
  MobileContentComponent,
  MobileListComponent,
  MobileComponent,
  MobileDirective,
  AlexComponent,
  CarolComponent,
  CathyComponent,
  CraigComponent
];

@NgModule({
  declarations,
  imports: [
    CommonModule,
    PipeModule,
    FormsModule
  ],
  exports:declarations,
  providers:[
    // {provide:listToken,useValue:'components.module.ts'}
  ]
})
export class ComponentsModule { }
