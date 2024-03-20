import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../cartProduct';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';

@Component
({
  selector: 'app-cart-management',
  templateUrl: './cart-management.component.html',
  styleUrls: ['./cart-management.component.scss']
})
export class CartManagementComponent implements OnInit
{

  data: CartProduct[] = [];
  salesTax: number = 1.0825;
  subTotal:number = 0;
  total: number = 0;
  discount: any;
  discountCode: any;
  
  constructor(private cartService: CartService, private orderService:OrderService){}

  
  ngOnInit(): void 
  {
    this.cartService.getAllCartProducts().subscribe
    ({
      next: (data) => 
      {
        this.data = data;
        console.log(this.data);
        this.subTotal = 0;
        data.forEach(cartProduct => this.subTotal += +(cartProduct.price * cartProduct.quantity).toFixed(2));
        this.subTotal = +this.subTotal.toFixed(2);
        this.total = this.subTotal;
        this.discount = +(this.cartService.discount * this.subTotal).toFixed(2);
        this.total -= this.discount;
        this.salesTax = +(this.total * .0825).toFixed(2);
        this.total = +(this.total + this.salesTax).toFixed(2);
      },
      error: (error) => 
      {
        console.log(error);
      }
    });
  }

  submitOrder() 
  {
    this.orderService.submitOrder().subscribe
    ({
      next: (data) => 
      {
        this.data = data;
        this.ngOnInit();
      },
      error: (error) => 
      {
        console.log(error);
      }
    });
  }

  applyDiscount() 
  {
    this.cartService.applyDiscount(this.discountCode).subscribe
    ({
      next: (data) => 
      {
        console.log(data);
        this.cartService.discount = data.discount;
        this.ngOnInit();
      },
      error: (error) => 
      {
        console.log(error);
      }
    });
  }
  
}
