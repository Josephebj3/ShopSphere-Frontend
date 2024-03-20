import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService
{
  private baseUrl: string = 'https://fakestoreapi.com/';

  constructor(private http:HttpClient){}
  getProductDetailsById(id: number)
  {
    const productUrl:string = this.baseUrl +'products/' + id;
    return this.http.get<any>(productUrl);
  }
}
