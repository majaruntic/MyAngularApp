import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import  products  from '../products.json';
import { CartService } from '../cart.service';

export interface Product {
	id : string;
	name : string;
	description : string;
	features : string;
	price : string;
	keywords : string;
	url : string;
	category : string;
	subcategory : string;
	images? : string[];
	salePrice? : string;
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
	
	 product: Product | undefined;
	 
	  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  constructor(private route: ActivatedRoute,
   private cartService: CartService) { }

  ngOnInit(): void {
	  
	    const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = String(routeParams.get('productId'));
  
  this.product = products.products.data.items.find(product => product.id === productIdFromRoute);
  
  }

}
