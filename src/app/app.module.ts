import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './hw/book.component';
import { ProfileComponent } from './profile/profile.component';
import { WishComponent } from './wish/wish.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { CartItemsComponent} from './shop-cart/cart-items/cart-items.component';
import { CartPriceComponent} from './shop-cart/cart-price/cart-price.component';
import { SaveForLaterComponent} from './shop-cart/save-for-later/save-for-later.component';
import { RatingComponent} from './rating/rating.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ProfileComponent,
    WishComponent,
    ShopCartComponent,
    CartItemsComponent,
    CartPriceComponent,
    SaveForLaterComponent,
    RatingComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
