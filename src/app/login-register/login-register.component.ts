import { Component } from '@angular/core';
import { LoginRegisterService } from '../login-register.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { MenuComponent } from '../menu/menu.component';

@Component
({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent 
{

  isFormVisible: boolean = false;
  email:string = '';
	userName:string = '';
	password:string = '';
	firstName:string = '';
  lastName:string = '';
	city:string = '';
  street:string = '';
  number:string = '';
  zipCode:string = '';
	phone:string = '';
  token:string = '';

  constructor(private service:LoginRegisterService)
  {
    this.email = service.username;
  }

  onLogin()
  {
    this.service.getUserId(this.email).subscribe
    (
      (data) =>
      {
        console.log(data);
        this.service.userId = data;
      },
      (error) =>
      {
        console.log(error);
      }
    );

    this.service.getToken(this.email,this.password).subscribe
    (
      (data) =>
      {
        console.log(data);
        this.service.httpOptions = 
        {
          headers: new HttpHeaders
          ({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${data}`
          }),
          responseType: 'json',
        };
        this.password = '';
      }, 
      (error) =>
      {
        console.log(error);
      }
    );
  }



  
  onLogout() 
  {
    this.service.logout(this.token)
    .subscribe
      (
        (data) => 
        {
          console.log(data);
          this.service.httpOptions = 
          {
            headers: new HttpHeaders({Accept: 'text/plain'}),
            responseType: 'text' as 'json',
          };
          this.service.userId = 0;
        },
        (error) => 
        {
          console.log(error);
        }
      );
  }

  onClick() 
  {
    this.isFormVisible = !this.isFormVisible;
  }
  onRegister() 
  {
    this.service.register
    (
      this.email, 
      this.userName, 
      this.password, 
      this.firstName,
      this.lastName,
	    this.city,
      this.street,
      this.number,
      this.zipCode,
	    this.phone,
    ).subscribe
    (
      (data) => 
      {
        console.log(data);
        this.email = '', 
        this.userName = '', 
        this.password = '', 
        this.firstName = '',
        this.lastName = '',
	      this.city = '',
        this.street = '',
        this.number = '',
        this.zipCode = '',
	      this.phone = data
        this.onClick();
      },
      (error) => 
      {
        console.log(error);
      }
    );
  }
  

}
