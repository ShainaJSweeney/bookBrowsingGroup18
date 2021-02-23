import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './hw/book.component';
import { ProfileComponent } from './profile/profile.component';
import { WishComponent } from './wish/wish.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';

const routes: Routes = [
  { path: 'books', component: BookComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'wish', component: WishComponent },
  { path: 'shop', component: ShopCartComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
