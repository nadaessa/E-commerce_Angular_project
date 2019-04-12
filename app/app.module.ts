import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationLinksComponent } from './components/navigation-links/navigation-links.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { CartComponent } from './components/cart/cart.component';

import { ProductService } from './services/product.service';
import { UsernameComponent } from './components/username/username.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'wishlist', component: WishListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'singlepage', component: SinglePageComponent },
  { path: 'singleproduct', component: SingleProductComponent },
  { path: '**', component: NotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegisterComponent,
    SingleProductComponent,
    WishListComponent,
    NotFoundComponent,
    LogoutComponent,
    NavigationLinksComponent,
    SinglePageComponent,
    CartComponent,
    UsernameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
