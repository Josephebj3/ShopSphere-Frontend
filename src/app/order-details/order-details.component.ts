import { Component, Input } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { OrderHistoryComponent } from '../order-history/order-history.component';
import { CartService } from '../cart.service';
import { LoginRegisterService } from '../login-register.service';

@Component
({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent 
{

  @Input()
  order?: Order;
  amountToAdd: any;

  constructor(private orderHistory: OrderHistoryComponent, private orderService:OrderService, private cartService:CartService, private loginService:LoginRegisterService){}

  addToCart(productId: any) 
  {
    this.cartService.addToCart(this.loginService.userId, productId, this.amountToAdd, this.loginService.httpOptions).subscribe
    (
      (data) =>
      {
        console.log(data);
        this.amountToAdd = null;
      }, 
      (error) =>
      {
        console.log(error);
      }
    );
  }
}
