import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CartManagementComponent } from './cart-management/cart-management.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { CategoryComponent } from './category/category.component';


const routes: Routes = 
[
  {
    path:"",
    component:ProductListingComponent
  },
  {
    path:"admin",
    component:AdminDashboardComponent
  },
  {
    path:"cart",
    component:CartManagementComponent
  },
  {
    path:"order",
    component:OrderHistoryComponent
  },
  {
    path:"categories",
    component:CategoryComponent
  },
  {
    path:"wishlist",
    component:WishlistComponent
  },
  {
    path:"login-register",
    component:LoginRegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
