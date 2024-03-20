import { Component } from '@angular/core';
import { CartProduct } from '../cartProduct';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component
({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent 
{
orderId: any;
showAllOrByOrderId: string = 'All Orders';

  data: Order[] = [];

  constructor(private orderService: OrderService){}

  ngOnInit(): void 
  {
    if(this.orderService.showAll == true)
    {
      this.orderService.getOrders().subscribe
      ({
        next: (data) => 
        {
          this.data = data;
          console.log(this.data);
          this.showAllOrByOrderId = 'All Orders';
        },
        error: (error) => 
        {
          console.log(error);
        }
      })
    }
    else
    {
      this.orderService.getSingleOrder().subscribe
      ({
        next: (data) => 
        {
          this.data = data;
          console.log(this.data);
          this.showAllOrByOrderId = 'Order Id: '+this.orderService.orderId;
        },
        error: (error) => 
        {
          console.log(error);
        }
      })
    }
  }


  getByOrderId() 
  {
    this.orderService.showAll = false;
    this.orderService.orderId = this.orderId;
    this.ngOnInit();
  }
  showAll(arg0: string) 
  {
    this.orderService.showAll = true;
    this.ngOnInit();
  }
}
