import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SizerComponent } from './sizer/sizer.component';
import { TransferPanelComponent } from './transfer-panel/transfer-panel.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HerosComponent } from './pages/heros/heros.component';
import { HighlightDirective } from './demos/directives/highlight.directive';
import { StructuralComponent } from './demos/components/structural/structural.component';
import { ExampleComponent } from './demos/example/example.component';
import { UnlessDirective } from './demos/directives/unless.directive';
import { TplContainerComponent } from './demos/components/tpl-container/tpl-container.component';
import { TplOutletComponent } from './demos/components/tpl-outlet/tpl-outlet.component';

@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    TransferPanelComponent,
    LayoutComponent,
    HerosComponent,
    HighlightDirective,
    StructuralComponent,
    ExampleComponent,
    UnlessDirective,
    TplContainerComponent,
    TplOutletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }
