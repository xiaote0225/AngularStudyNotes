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
import { ShadowComponent } from './demos/components/shadow/shadow.component';
import { PanelComponent } from './demos/components/view-child/panel/panel.component';
import { ViewChildComponent } from './demos/components/view-child/view-child.component';
import { ContentChildComponent } from './demos/components/content-child/content-child.component';
import { ChidComponentComponent } from './demos/components/content-child/chid-component/chid-component.component';
import { PipeComponent } from './demos/components/pipe/pipe.component';
import { ExponentialStrengthPipe } from './demos/pipes/exponential-strength.pipe';
import { FlyingHeroesImpurePipe } from './demos/pipes/flying-heroes-impure.pipe';
import { LifeCycleComponent } from './demos/components/life-cycle/life-cycle.component';

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
    TplOutletComponent,
    ShadowComponent,
    PanelComponent,
    ViewChildComponent,
    ContentChildComponent,
    ChidComponentComponent,
    PipeComponent,
    ExponentialStrengthPipe,
    FlyingHeroesImpurePipe,
    LifeCycleComponent
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
