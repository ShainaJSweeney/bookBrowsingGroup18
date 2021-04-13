import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookComponent } from './components/book/book.component';
import { SearchAuthorComponent } from './components/search-author/search-author.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { RatingComponent } from './components/rating/rating.component';
import { AuthorDetailsComponent } from './components/author-details/author-details.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent},
  {path:'shop-cart', component: ShopCartComponent},
  {path:'edit-user', component: EditUserComponent},
  { path: 'books', component: BookComponent },
  { path: 'books/:query/:booksPerPage/:pageNum', component: BookComponent },
  { path: 'rating', component: RatingComponent},
  { path: 'authorDetails/:theRequest', component: AuthorDetailsComponent},
  {path:'authors/:booksPerPage/:pageNum', component: SearchAuthorComponent },
  { path: 'details', component: BookDetailsComponent},
  { path: 'details/:theRequest', component: BookDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
