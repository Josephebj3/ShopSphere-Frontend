import { Component, Input } from '@angular/core';
import { CartProduct } from '../cartProduct';
import { LoginRegisterService } from '../login-register.service';
import { WishlistService } from '../wishlist.service';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component
({
  selector: 'app-wishlist-details',
  templateUrl: './wishlist-details.component.html',
  styleUrls: ['./wishlist-details.component.scss']
})
export class WishlistDetailsComponent 
{
  @Input()
  cartProduct?: CartProduct;


  constructor(private loginService:LoginRegisterService, private wishlistService:WishlistService, private wishlist:WishlistComponent){}

  removeFromCart(productId: any) 
  {
    this.wishlistService.removeFromCart(productId).subscribe
    (
      (data) =>
      {
        console.log(data);
        this.wishlist.ngOnInit();
      }, 
      (error) =>
      {
        console.log(error);
      }
    );
  }

}
