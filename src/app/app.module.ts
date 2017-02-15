import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { SiteHeaderComponent }  from './shared/site-header/site-header.component';
import { SiteFooterComponent }  from './shared/site-footer/site-footer.component';
import { HomeComponent }  from './home/home.component';
import { ContactComponent }  from './contact/contact.component';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
          { path:'home', component:HomeComponent},
          { path:'contact', component:ContactComponent},
          { path:'', redirectTo: 'home', pathMatch: 'full'},
          { path:'**', redirectTo: 'home', pathMatch: 'full'}
      ])
  ],
  declarations: [ AppComponent, SiteHeaderComponent, SiteFooterComponent, HomeComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
