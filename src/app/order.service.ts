import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRegisterService } from './login-register.service';
import { Order } from './order';

@Injectable({providedIn: 'root'})
export class OrderService 
{
  
  private baseUrl: string = 'http://localhost:8080/orders/';
  httpOptions = 
  {
    headers: new HttpHeaders({Accept: 'text/plain', 
    }),
    responseType: 'text' as 'json'
  };
  showAll: boolean = true;
  orderId:number = -1;

  constructor(private http:HttpClient, private loginService: LoginRegisterService) {}

  getOrders() 
  {
    const cartProductUrl:string = this.baseUrl+this.loginService.userId;
    console.log(this.loginService.httpOptions);
    return this.http.get<Order[]>(cartProductUrl,this.loginService.httpOptions);
  }
  
  submitOrder() 
  {
    const cartProductUrl:string = this.baseUrl+this.loginService.userId;
    console.log(this.loginService.httpOptions);
    return this.http.post<Order[]>(cartProductUrl,null,this.loginService.httpOptions);
  }

  getSingleOrder() 
  {
    const cartProductUrl:string = this.baseUrl+this.loginService.userId+"/detail/"+this.orderId;
    console.log(this.loginService.httpOptions);
    return this.http.get<Order[]>(cartProductUrl,this.loginService.httpOptions);
  }
}
