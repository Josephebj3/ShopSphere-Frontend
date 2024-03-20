import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, catchError, map } from 'rxjs';

@Injectable({providedIn: 'root'})

export class LoginRegisterService 
{
  username:string = '';  //is an email
  userId:number = 0;
  private loginUrl = 'http://localhost:8080/auth';

  httpOptions = 
  {
    headers: new HttpHeaders({Accept: 'text/plain', }),
    responseType: 'text' as 'json',
  };

  constructor(private http: HttpClient) { }

  
  getUserId(username: string) :Observable<any>   //username is an email
  {
    this.username = username;
    console.log(username);
    console.log(this.userId);
    return this.http.post<any>
    (
      this.loginUrl + '/getId',
      {"email":username},
      this.httpOptions
    );

    
  }

  getToken(email:string,password:string) :Observable<any>
  {
    return this.http.post<any>
    (
      this.loginUrl + '/login', 
      {
        "username":email,
        "password":password
      }, 
      this.httpOptions
    )
  }

  logout(token: string) 
  {
    this.httpOptions.responseType = 'text' as 'json';
    return this.http.post<any>(this.loginUrl + '/logout',null, this.httpOptions);
  }


  register(email: string, userName: string, password: string, firstName: string, lastName: string, city: string, streetName: string, houseNumber: string, zipCode: string, phone: string):Observable<any>
  {
    return this.http
      .post<any>(this.loginUrl + '/register', 
      {
        "email":email,
        "userName":userName,
        "password":password,
        "name":
        {
            "firstName":firstName,
            "lastName":lastName
        },
        "address":
        {
            "city":city,
            "street":streetName,
            "number":houseNumber,
            "zipCode":zipCode
        },
        "phone":"1-570-236-7033",
        "admin":false  
      }, this.httpOptions);
  }
}
