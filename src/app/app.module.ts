import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { HttpModule } from '@angular/http';
import { SimpleHTTPComponenComponent } from './simple-httpcomponen/simple-httpcomponen.component'

@NgModule({
  declarations: [AppComponent, SimpleHTTPComponenComponent],
  imports: [BrowserModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
