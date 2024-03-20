import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { CartProduct } from './cartProduct';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})
export class CategoryService 
{

  httpOptions = 
  {
    headers: new HttpHeaders({Accept: 'text/plain', 
    }),
    params : new HttpParams(),
    responseType: 'text' as 'json'
  };

  private baseUrl:string = 'http://localhost:8080/products/categories/';
  constructor(private http:HttpClient) { }

  getProductsByCategories(category:string)
  {
    const productUrl:string = this.baseUrl+category;
    return this.http.get<Product[]>(productUrl);
  }

  addToCart(userId: number, productId: any, httpOptions: { headers: HttpHeaders; responseType: "json"; }) :Observable<any>
  {
    this.httpOptions.headers = httpOptions.headers;
    this.httpOptions.params = new HttpParams();
    this.httpOptions.params = this.httpOptions.params.append('productId',productId);
    this.httpOptions.params = this.httpOptions.params.append('quantity',1);
    console.log(this.httpOptions);
    return this.http.post<CartProduct[]>
    (
      'http://localhost:8080/cart/'+userId+'/add',
      null,
      this.httpOptions
    );
  }
}
