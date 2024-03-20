import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { AdminService } from '../admin.service';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';

@Component
({
  selector: 'app-product-admin-details',
  templateUrl: './product-admin-details.component.html',
  styleUrls: ['./product-admin-details.component.scss']
})
export class ProductAdminDetailsComponent 
{
  @Input()
  product?:Product;
  name: any;
  image: any;
  description: any;
  category: any;
  price: any;

  constructor(private adminService:AdminService, private adminDash:AdminDashboardComponent){}

  updateProduct() 
  {
    if(this.name === undefined) this.name = this.product?.name;
    if(this.image === undefined) this.image = this.product?.image;
    if(this.description === undefined) this.description = this.product?.description;
    if(this.category === undefined) this.category = this.product?.category;
    if(this.price === undefined) this.price = this.product?.price;

    this.adminService.updateProduct(this.name, this.image, this.description, this.category, this.price, this.product?.id).subscribe
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

  onDeleteProduct(id:any)
  {
    this.adminService.deleteProduct(id).subscribe
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
