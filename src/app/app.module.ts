import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DynamicCardComponent} from './dynamic-card/dynamic-card.component';
import {TestComponent} from './test/test.component';
import {DynamicLabelComponent} from './dynamic-card/dynamic-label/dynamic-label.component';
import {DynamicInputComponent} from './dynamic-card/dynamic-input/dynamic-input.component';

import {MatInputModule, MatFormFieldModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    DynamicCardComponent,
    TestComponent,
    DynamicLabelComponent,
    DynamicInputComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  entryComponents: [
    TestComponent,
    DynamicInputComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
