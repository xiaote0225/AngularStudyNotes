import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SizerComponent } from './sizer/sizer.component';
import { TransferPanelComponent } from './transfer-panel/transfer-panel.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    SizerComponent,
    TransferPanelComponent,
    TransferComponent
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
