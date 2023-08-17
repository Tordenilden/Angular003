import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [ // Components
    AppComponent, FirstComponent
  ],
  imports: [ // Module extern or self defined
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // DI or something that looks like... global stuff
  bootstrap: [AppComponent] // the Component that are bootstrapped
})
export class AppModule { }
