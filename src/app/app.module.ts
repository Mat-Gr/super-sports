import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent }  from './app.component';
import { SiteHeaderComponent }  from './shared/site-header/site-header.component';
import { SiteFooterComponent }  from './shared/site-footer/site-footer.component';
import { HomeComponent }  from './home/home.component';
import { ProductListComponent }  from './product/product-list.component';
import { ProductDetailsComponent }  from './product/product-details.component';
import { ContactComponent }  from './contact/contact.component';

import { DataService }  from './shared/product-data/data.service';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
          { path:'home', component:HomeComponent},
          { path:'contact', component:ContactComponent},
          { path:'product/:id', component:ProductDetailsComponent},
          { path:'', redirectTo: 'home', pathMatch: 'full'},
          { path:'**', redirectTo: 'home', pathMatch: 'full'}
      ])
  ],
  declarations: [ AppComponent, SiteHeaderComponent, SiteFooterComponent, HomeComponent, ProductListComponent, ProductDetailsComponent, ContactComponent ],
  providers: [ DataService, {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
