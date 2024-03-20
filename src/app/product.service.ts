import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { LoginRegisterService } from './login-register.service';

@Injectable({providedIn: 'root'})
export class ProductService 
{
  private baseUrl: string = 'http://localhost:8080/products/';
  public singleProduct: Product[] = [];
  constructor(private http:HttpClient, private loginService: LoginRegisterService) {}

  getAllProducts()
  {
    const productUrl:string = this.baseUrl;
    return this.http.get<Product[]>(productUrl);
  }

  getSingleProduct(productId:any) 
  {
    return this.http.get<Product[]>(this.baseUrl+productId);
  }
}
