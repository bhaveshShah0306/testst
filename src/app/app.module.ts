import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { Content2Component } from './content2/content2.component';
import { ServicesComponent } from './services/services.component';
import { CharityComponent } from './charity/charity.component';
import { CareerComponent } from './career/career.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { BecomememberComponent } from './becomemember/becomemember.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LayoutcomponentComponent } from './layoutcomponent/layoutcomponent.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  
    Content2Component,
    ServicesComponent,
    CharityComponent,
    CareerComponent,
    BlogComponent,
    ContactComponent,
    BecomememberComponent,
    LayoutcomponentComponent,

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule  ,NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
