import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { User } from '../user';
import { AdminService } from '../admin.service';
import { Discount } from '../discount';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit
{
  areUsersVisible: boolean = false;
  areProductsVisible: boolean = false;
  areDiscountsVisible: boolean = false;
  usersOrProducts:string = "Users";
  user: User[] = [];
  product:Product[] = [];
  discount:Discount[] = [];
  name: string = '';
  description: string = '';
  price: number = 0;
  category: string = '';
  image: string = '';

  discountName:string = '';
  percentDiscount: number = 0;
  discountCode: string = ''

  constructor(private adminService:AdminService){}

  ngOnInit()
  {
    this.usersOrProducts = this.adminService.usersOrProducts;

    if(this.usersOrProducts == 'Users')
    {
      this.areUsersVisible = true;
      this.areProductsVisible = false;
      this.areDiscountsVisible = false;
      this.adminService.getUsers().subscribe
      ({
        next:(data) => 
        {
          this.user = data;
        }
      })
    }
    else if(this.usersOrProducts == 'Products')
    {
      this.areUsersVisible = false;
      this.areProductsVisible = true;
      this.areDiscountsVisible = false;
      this.adminService.getProducts().subscribe
      ({
        next:(data) => 
        {
          this.product = data;
        }
      })
    }
    else
    {
      this.areUsersVisible = false;
      this.areProductsVisible = false;
      this.areDiscountsVisible = true;
      this.adminService.getDiscounts().subscribe
      ({
        next:(data) => 
        {
          this.discount = data;
        }
      })
    }

  }

  changeCategory(data:any) 
  {
    this.adminService.usersOrProducts = data;
    this.ngOnInit();
  }

  addProduct()
  {
    this.adminService.addProduct(this.name, this.description, this.price, this.category, this.image).subscribe
    (
      (data) =>
      {
        console.log(data);
        this.name = '';
        this.description = '';
        this.price = 0;
        this.category = '';
        this.image = '';
        this.ngOnInit();
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }

  addDiscount()
  {
    this.adminService.addDiscount(this.discountName, this.percentDiscount, this.discountCode).subscribe
    (
      (data) =>
      {
        console.log(data);
        this.discountName = '';
        this.percentDiscount = 0;
        this.discountCode = ''
        this.ngOnInit();
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }
}
