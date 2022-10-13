import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product-details/product-details.component';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
	
	items = this.cartService.getItems();

	constructor( private cartService: CartService) { }
  
	removeFromCart(product: Product) {
		this.cartService.removeFromCart(product);
		window.alert('Your product has been removed from cart!');
	}
  
	ngOnInit(): void {
	}

}
