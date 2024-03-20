import { Component, Input } from '@angular/core';
import { User } from '../user';
import { zip } from 'rxjs';
import { AdminService } from '../admin.service';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { LoginRegisterService } from '../login-register.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent 
{
  @Input()
  user?:User;
  userName: any;
  firstName: any;
  lastName: any;
  street: any;
  number: any;
  city: any;
  zipCode: any;
  phone: any;
  admin: any;
  adminId: any = this.loginService.userId;


  constructor(private adminService:AdminService, private adminDash:AdminDashboardComponent, private loginService:LoginRegisterService){}


  updateUser() 
  {
    if(this.userName === undefined) this.userName = this.user?.userName;
    if(this.firstName === undefined) this.firstName = this.user?.name.firstName;
    if(this.lastName === undefined) this.lastName = this.user?.name.lastName;
    if(this.street === undefined) this.street = this.user?.address.street;
    if(this.number === undefined) this.number = this.user?.address.number;
    if(this.city === undefined) this.city = this.user?.address.city;
    if(this.zipCode === undefined) this.zipCode = this.user?.address.zipCode;
    if(this.phone === undefined) this.phone = this.user?.phone;
    if(this.admin === undefined) this.admin = this.user?.admin;

    this.adminService.updateUser(this.user?.id, this.user?.email, this.userName, this.firstName, this.lastName, this.street, this.number, this.city, this.zipCode, this.phone, this.admin).subscribe
    (
      (data) =>
      {
        console.log(data);
        this.adminDash.ngOnInit();
      },
      (error) =>
      {
        console.log(error);
      }
    );

  }

  onDelete(id:any)
  {
    this.adminService.deleteUser(id).subscribe
    (
      (data) =>
      {
        console.log(data);
        this.adminDash.ngOnInit();
      },
      (error) =>
      {
        console.log(error);
        this.adminDash.ngOnInit();
      }
    );
  }
  
}
