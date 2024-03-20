import { Component, Injectable, Input, OnInit } from '@angular/core';
import { LoginRegisterService } from '../login-register.service';
import { CategoryService } from '../category.service';
import { CartProduct } from '../cartProduct';
import { CartManagementComponent } from '../cart-management/cart-management.component';
import { CartService } from '../cart.service';

@Component
({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent 
{


  @Input()
  cartProduct?: CartProduct;
  amountToAdd: any;
  amountToDelete: any;
  updateQuantity: any;

  constructor(private loginService:LoginRegisterService, private cartManager: CartManagementComponent, private cartService:CartService){}

  addToCart(productId: any) 
  {
    this.cartService.addToCart(this.loginService.userId, productId, this.amountToAdd, this.loginService.httpOptions).subscribe
    (
      (data) =>
      {
        console.log(data);
        this.cartManager.ngOnInit();
      }, 
      (error) =>
      {
        console.log(error);
      }
    );
  }
  deleteFromCart(productId: any) 
  {
    this.cartService.deleteFromCart(this.loginService.userId, productId, this.amountToDelete, this.loginService.httpOptions).subscribe
    (
      (data) =>
      {
        console.log(data);
        this.cartManager.ngOnInit();
      }, 
      (error) =>
      {
        console.log(error);
      }
    );
  }
}
