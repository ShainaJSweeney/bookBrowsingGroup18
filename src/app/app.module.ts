import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './hw/book.component';
import { ProfileComponent } from './profile/profile.component';
import { WishComponent } from './wish/wish.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SaveForLaterComponent } from './save-for-later/save-for-later.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartPriceComponent } from './cart-price/cart-price.component';
import { RatingComponent} from './rating/rating.component';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ProfileComponent,
    WishComponent,
    ShopCartComponent,
    TopBarComponent,
    FooterComponent,
    SaveForLaterComponent,
    CartItemsComponent,
    CartPriceComponent,
    RatingComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
