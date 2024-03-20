import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../cartProduct';
import { WishlistService } from '../wishlist.service';

@Component
({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit
{
  
  data:CartProduct[] = [];

  constructor(private wishlistService:WishlistService){}


  ngOnInit(): void 
  {
    this.wishlistService.getWishlist().subscribe
    ({
      next: (data) => 
      {
        this.data = data;
        console.log(this.data);
      },
      error: (error) => 
      {
        console.log(error);
      }
    })
  }
}
