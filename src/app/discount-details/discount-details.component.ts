import { Component, Input } from '@angular/core';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { AdminService } from '../admin.service';
import { Discount } from '../discount';

@Component({
  selector: 'app-discount-details',
  templateUrl: './discount-details.component.html',
  styleUrls: ['./discount-details.component.scss']
})
export class DiscountDetailsComponent 
{
  @Input()
  discount?:Discount;
  name: any;
  percentDiscount: any;
  discountCode: any;
  

  constructor(private adminService:AdminService, private adminDash:AdminDashboardComponent){}

  updateDiscount()
  {
    if(this.name === undefined) this.name = this.discount?.name;
    if(this.percentDiscount === undefined) this.percentDiscount = this.discount?.discount;
    if(this.discountCode === undefined) this.discountCode = this.discount?.discountCode;

    this.adminService.updateDiscount(this.discount?.id, this.name, this.percentDiscount, this.discountCode).subscribe
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
    this.adminService.deleteDiscount(id).subscribe
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
