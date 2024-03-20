import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { LoginRegisterService } from '../login-register.service';
import { CategoryService } from '../category.service';
import { WishlistService } from '../wishlist.service';
import { ProductService } from '../product.service';
import { ProductListingComponent } from '../product-listing/product-listing.component';

@Component
({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent
{

  @Input()
  product?: Product;

  constructor(private loginService:LoginRegisterService, private categoryService: CategoryService, private wishlistService:WishlistService, private productService:ProductService, private productListing:ProductListingComponent){}

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

  singleProduct(productId:any)
  {
    this.productService.getSingleProduct(productId).subscribe
    ({
      next: (data) => 
      {
        console.log(data);
        this.productService.singleProduct = data;
        this.productListing.showALL = false
        this.productListing.ngOnInit();
      },
      error: (error) => {console.log(error);}
    })
  }
}
