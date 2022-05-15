import { Component, OnInit } from '@angular/core';
import { NavigationHelper } from 'src/app/core/constants/navigation-helper';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/core/types/product';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  logoutPath: string = '';
  cartDetailPath: string = '';

  faCart = faCartShopping;
  faWishlist = faHeart;
  isShow: boolean = true;

  cartCount: number = 0;
  cartTotal: number = 0;
  wishlistCount: number = 0;
  productCart: Product[] = [];
  productWishlist: Product[] = [];

  constructor() {}

  ngOnInit(): void {
    this.logoutPath = NavigationHelper.Login;
    this.cartDetailPath = NavigationHelper.CartDetail;
  }

  addProductToCart(item: Product) {
    debugger;
    this.productCart.push(item);
    this.cartCount = this.productCart.length;
    this.productCart.forEach((item: Product) => {
      this.cartTotal += item.price;
    });
  }

  addProductToWishlist(item: Product) {
    this.productWishlist.push(item);
    this.wishlistCount = this.productWishlist.length;
  }

  showProducts() {
    this.isShow = !this.isShow;
  }
}
