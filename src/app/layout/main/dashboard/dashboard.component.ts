import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/core/types/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  products: Product[] = [];

  @Output() addProduct: EventEmitter<Product> = new EventEmitter();
  @Output() addWishListProduct: EventEmitter<Product> = new EventEmitter();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    //Using Observable
    // this.productService.getAllProducts().subscribe((data: Product[]) => {
    //   this.products = data;
    // });

    //Using Subject
    this.productService
      .getAllProductsUsingSubject()
      .subscribe((data: Product[]) => {
        this.products = data;
      });
  }

  addToCart(item: Product) {
    this.addProduct.emit(item);
  }

  addToWishList(item: Product) {
    this.addWishListProduct.emit(item);
  }

  ngOnDestroy(): void {
    this.productService.productSubject$.unsubscribe();
  }
}
