import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component
({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit
{
  data: Product[] = [];
  singleProduct: any;
  showALL: boolean = true;

  constructor(private pService: ProductService){}

  ngOnInit(): void 
  {
    this.pService.getAllProducts().subscribe
    ({
      next: (data) => 
      {
        console.log(data);
        this.data = data;
        this.singleProduct = this.pService.singleProduct;
        console.log(this.singleProduct);
      },
      error: (error) => {console.log(error);}
    })

  }

  showAll()
  {
    this.showALL = true;
    this.ngOnInit();
  }
  
}
