import { Injectable } from '@angular/core';
import { Product } from './product-details/product-details.component';
@Injectable({
  providedIn: 'root'
  
  
})

export class CartService {
  items: Product[] = [];
  
    addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }
  
  removeFromCart(product: Product) {
	this.items.forEach((element,index)=>{
		if(element===product) this.items.splice(index,1);
	});
   
  }

  constructor() { }
}
