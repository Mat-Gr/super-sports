import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { SiteHeaderComponent }  from './shared/site-header/site-header.component';
import { SiteFooterComponent }  from './shared/site-footer/site-footer.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, SiteHeaderComponent, SiteFooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
