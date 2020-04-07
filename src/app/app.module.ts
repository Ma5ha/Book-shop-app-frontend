import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { LayoutComponent } from './app/layout/layout.component';
import { HomeComponent } from './home/home.component';

// npm carousel- owl
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecommendedBooksComponent } from './home/recommended-books/recommended-books.component';
import { AboutSectionComponent } from './home/about-section/about-section.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    HomeComponent,
    RecommendedBooksComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
