import { Injectable } from '@angular/core';
import { CartProduct } from './cartProduct';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { LoginRegisterService } from './login-register.service';
import { Discount } from './discount';

@Injectable({providedIn: 'root'})
export class CartService 
{
  
  private baseUrl: string = 'http://localhost:8080/cart/';
  httpOptions = 
  {
    headers: new HttpHeaders({Accept: 'text/plain', 
    }),
    params : new HttpParams(),
    responseType: 'text' as 'json'
  };
  discount: number = 0.00;

  constructor(private http:HttpClient, private loginService: LoginRegisterService) {}

  

  getAllCartProducts() 
  {
    const cartProductUrl:string = this.baseUrl+this.loginService.userId;
    console.log(this.loginService.httpOptions);
    return this.http.get<CartProduct[]>(cartProductUrl,this.loginService.httpOptions);
  }

  addToCart(userId: number, productId: any, amountToAdd: any, httpOptions: { headers: import("@angular/common/http").HttpHeaders; responseType: "json"; }) 
  {
    this.httpOptions.headers = httpOptions.headers;
    this.httpOptions.params = new HttpParams();
    this.httpOptions.params = this.httpOptions.params.append('productId',productId);
    this.httpOptions.params = this.httpOptions.params.append('quantity',amountToAdd);
    console.log(this.httpOptions);
    return this.http.post<CartProduct[]>
    (
      this.baseUrl+userId+'/add',
      null,
      this.httpOptions
    );
  }

  deleteFromCart(userId: number, productId: any, amountToAdd: any, httpOptions: { headers: HttpHeaders; responseType: "json"; }) 
  {
    this.httpOptions.headers = httpOptions.headers;
    this.httpOptions.params = new HttpParams();
    this.httpOptions.params = this.httpOptions.params.append('quantity',amountToAdd);
    console.log(this.httpOptions);
    return this.http.delete<CartProduct[]>
    (
      this.baseUrl+userId+'/remove/'+productId,
      this.httpOptions
    );
  }

  applyDiscount(discountCode: any) 
  {
    return this.http.get<Discount>
    (
      'http://localhost:8080/discount/'+discountCode,
      this.loginService.httpOptions
    );
  }
}
