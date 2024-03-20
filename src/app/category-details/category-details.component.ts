import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { LoginRegisterService } from '../login-register.service';
import { CategoryService } from '../category.service';
import { WishlistService } from '../wishlist.service';

@Component
({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent 
{
  @Input()
  product?:Product;

  constructor(private loginService:LoginRegisterService, private categoryService: CategoryService, private wishlistService:WishlistService){}



  addToCart(productId: any) 
  {
    this.categoryService.addToCart(this.loginService.userId, productId, this.loginService.httpOptions).subscribe
    (
      (data) =>
      {
        console.log(data);
      }, 
      (error) =>
      {
        console.log(error);
      }
    );
  }

  addToWishlist(productId: any) 
  {
    this.wishlistService.addToWishlist(productId).subscribe
    (
      (data) =>
      {
        console.log(data);
      }, 
      (error) =>
      {
        console.log(error);
      }
    );
  }
  
}
