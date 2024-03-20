import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRegisterService } from './login-register.service';
import { CartProduct } from './cartProduct';

@Injectable({providedIn: 'root'})
export class WishlistService 
{
  
  private baseUrl: string = 'http://localhost:8080/';

  httpOptions = 
  {
    headers: new HttpHeaders({Accept: 'text/plain', 
    }),
    params : new HttpParams(),
    responseType: 'text' as 'json'
  };

  constructor(private http:HttpClient, private loginService: LoginRegisterService) { }

  getWishlist()
  {
    const wishlistUrl:string = this.baseUrl+"wishlist/"+this.loginService.userId;
    console.log(this.loginService.httpOptions);
    return this.http.get<CartProduct[]>(wishlistUrl,this.loginService.httpOptions);
  }

  removeFromCart(productId: any) 
  {
    const wishlistUrl:string = this.baseUrl+"wishlist/"+this.loginService.userId+"/remove/"+productId;
    console.log(this.loginService.userId);
    console.log(productId);
    console.log(this.loginService.httpOptions);
    return this.http.delete<CartProduct[]>(wishlistUrl,this.loginService.httpOptions);

  }

  addToWishlist(productId: any) 
  {
    const wishlistUrl:string = this.baseUrl+"wishlist/"+this.loginService.userId;
    this.httpOptions.headers = this.loginService.httpOptions.headers;
    this.httpOptions.params = new HttpParams();
    this.httpOptions.params = this.httpOptions.params.append("productId",productId);
    return this.http.post<CartProduct[]>
    (
      wishlistUrl,
      null,
      this.httpOptions
    );
  }
}
