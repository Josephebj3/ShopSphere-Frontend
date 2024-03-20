import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartManagementComponent } from './cart-management/cart-management.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginRegisterService } from './login-register.service';
import { ProductService } from './product.service';
import { ProductDetailsService } from './product-details.service';
import { CategoryComponent } from './category/category.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { CategoryService } from './category.service';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CartService } from './cart.service';
import { WishlistDetailsComponent } from './wishlist-details/wishlist-details.component';
import { WishlistService } from './wishlist.service';
import { OrderService } from './order.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductAdminDetailsComponent } from './product-admin-details/product-admin-details.component';
import { AdminService } from './admin.service';
import { DiscountDetailsComponent } from './discount-details/discount-details.component';

@NgModule
({
  declarations: 
  [
    AppComponent,
    LoginRegisterComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    CartManagementComponent,
    WishlistComponent,
    OrderHistoryComponent,
    AdminDashboardComponent,
    MenuComponent,
    CategoryComponent,
    CategoryDetailsComponent,
    CartDetailsComponent,
    WishlistDetailsComponent,
    OrderDetailsComponent,
    UserDetailsComponent,
    ProductAdminDetailsComponent,
    DiscountDetailsComponent,
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: 
  [
    LoginRegisterService, ProductService, 
    ProductDetailsService, CategoryService,
    CartService, WishlistService,
    OrderService, AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
