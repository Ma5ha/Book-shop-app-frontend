import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularTokenModule } from 'angular-token';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

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
import { UserComponent } from './user-page/user/user.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsandconditionComponent } from './termsandcondition/termsandcondition.component';
import { FlashComponent } from './shared/flash/flash.component';
import { NgbAlertModule, NgbTypeaheadModule, NgbModalModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FlashmessageService } from '@app/shared/service/flashmessage.service';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ShowAllBookSComponent } from './show-all-book-s/show-all-book-s.component';

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
    UserComponent,
    FooterComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    TermsandconditionComponent,
    FlashComponent,
    ProductComponent,
    CartComponent,
    ShowAllBookSComponent,


  ],
  imports: [
    NgbDropdownModule,
    NgbModalModule,
    NgbTypeaheadModule,
    NgbAlertModule,
    HttpClientModule,
    AngularTokenModule.forRoot({
      apiBase:
        environment.userAuth

    }),
    FormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FlashmessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
