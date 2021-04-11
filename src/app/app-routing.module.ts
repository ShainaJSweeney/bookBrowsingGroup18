import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './hw/book.component';
import { ProfileComponent } from './profile/profile.component';
import { WishComponent } from './wish/wish.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { BookDetailsComponent} from './book-details/book-details.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorComponent } from './searchAuthor/author.component';
import { RatingComponent} from './rating/rating.component';

const routes: Routes = [
  { path: 'books', component: BookComponent },
  { path: 'books/:query/:booksPerPage/:pageNum', component: BookComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'wish', component: WishComponent },
  { path: 'shop', component: ShopCartComponent },
  { path: 'details', component: BookDetailsComponent},
  { path: 'details/:theRequest', component: BookDetailsComponent},
  { path: 'authorDetails/:theRequest', component: AuthorDetailsComponent},
  { path: 'rating', component: RatingComponent},
  { path: 'authors/:booksPerPage/:pageNum', component: AuthorComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
