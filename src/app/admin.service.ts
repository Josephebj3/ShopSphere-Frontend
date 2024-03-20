import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRegisterService } from './login-register.service';
import { User } from './user';
import { Product } from './product';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { Observable } from 'rxjs';
import { Discount } from './discount';

@Injectable({providedIn: 'root'})
export class AdminService 
{
  usersOrProducts: string = 'Users';

  private baseUrl: string = 'http://localhost:8080/';
  httpOptions = 
  {
    headers: new HttpHeaders({Accept: 'text/plain', 
    }),
    responseType: 'text' as 'json'
  };
  

  constructor(private http:HttpClient, private loginService: LoginRegisterService) { }

  getUsers() 
  {
    return this.http.get<User[]>
    (
      this.baseUrl+'admin/users',
      this.loginService.httpOptions
    );
  }
  getProducts() 
  {
    return this.http.get<Product[]>(this.baseUrl+'products/admin',this.loginService.httpOptions);
  }
  getDiscounts() 
  {
    return this.http.get<Discount[]>(this.baseUrl+'discount/admin',this.loginService.httpOptions);
  }

  updateProduct(name: any, image: any, description: any, category: any, price: any, productId:any) 
  {
    return this.http.put<Product>
    (
      this.baseUrl+'products/admin/'+productId,
      {
        "id": productId,
        "name": name,
        "description": description,
        "price": price,
        "category": category,
        "image": image
      },
      this.loginService.httpOptions
    );
  }

  updateUser(id:any, email:any, userName: any, firstName: any, lastName: any, street: any, number: any, city: any, zipCode: any, phone: any, admin: any) 
  {

    console.log('id = ' + id);
    return this.http.put<User>
    (
      this.baseUrl+'admin/users/'+id,
      {
        "email":email,
        "userName":userName,
        "name":{
            "firstName":firstName,
            "lastName":lastName
        },
        "address":{
            "city":city,
            "street":street,
            "number":number,
            "zipCode":zipCode
        },
        "phone":phone,
        "admin":admin
      },
      this.loginService.httpOptions
    );
  }

  updateDiscount(id: any, name: any, percentDiscount: any, discountCode: any) 
  {
    return this.http.put<Discount>
    (
      this.baseUrl+'discount/admin/'+id,
      {
        "id":id,
        "name":name,
        "discount":percentDiscount,
        "discountCode":discountCode
      },
      this.loginService.httpOptions
    )
  }

  deleteUser(id: any) 
  {
    return this.http.delete<any>(this.baseUrl+'admin/users/'+id, this.loginService.httpOptions);
  }

  addProduct(name:string, description:string, price:number, category:string, image:string) 
  {
    return this.http.post<any>
    (
      this.baseUrl+'products/admin',
      {
        "name":name,
        "description":description,
        "price":price,
        "category":category,
        "image":image
      },
      this.loginService.httpOptions
    );
  }

  addDiscount(discountName: string, percentDiscount: number, discountCode: string) 
  {
    return this.http.post<any>
    (
      this.baseUrl+'discount/admin',
      {
        "name":discountName,
        "discount":percentDiscount,
        "discountCode":discountCode
      },
      this.loginService.httpOptions
    )
  }

  deleteProduct(id: any) 
  {
    return this.http.delete<any>(this.baseUrl+'products/admin/'+id, this.loginService.httpOptions);
  }

  deleteDiscount(id: any) 
  {
    return this.http.delete<any>(this.baseUrl+'discount/admin/'+id, this.loginService.httpOptions);
  }
}


