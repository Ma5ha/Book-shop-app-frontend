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
import { AboutSectionComponent } from './home/about-section/about-section.component';
import { ButtonComponent } from './home/button/button.component';
import { OffersSectionComponent } from './home/offers-section/offers-section.component';
import { FeaturesSecComponent } from './home/features-sec/features-sec.component';
import { BookItemComponent } from './home/recommended-books/book-item/book-item.component';
import { UserPageComponent } from './user-page/user-page.component';
import { LoginComponent } from './user-page/login/login.component';
import { SignupComponent } from './user-page/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    HomeComponent,
    RecommendedBooksComponent,
    AboutSectionComponent,
    ButtonComponent,
    OffersSectionComponent,
    FeaturesSecComponent,
    BookItemComponent,
    UserPageComponent,
    LoginComponent,
    SignupComponent,

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
