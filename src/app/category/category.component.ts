import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit
{
  
  category:string = "Produce";
  product:Product[] = [];

  constructor(private service:CategoryService) {}

  ngOnInit()
  {
    this.service.getProductsByCategories(this.category).subscribe
    ({
      next:(data) => 
      {
        this.product = data;
      }
    })
  }

  
  changeCategory(data:any) 
  {
    this.category = data;
    this.service.getProductsByCategories(data).subscribe
    ({
      next:(data) => 
      {
        this.product = data;
      }
    })
  }

}
