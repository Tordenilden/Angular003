import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { TestComponent } from './Components/test/test.component';
import { HeroComponent } from './Components/hero/hero.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ // Components
    AppComponent,
    FirstComponent,
    TestComponent,
    HeroComponent
  ],
  imports: [ // Module extern or self defined
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [], // DI or something that looks like... global stuff
  bootstrap: [AppComponent] // the Component that are bootstrapped
})
export class AppModule { }
