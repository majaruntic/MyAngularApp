import { Component, OnInit } from '@angular/core';
import  products  from '../products.json';
import { Product } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products : Product[] = products.products.data.items;

  sortByPriceAsc() {
	  
	this.products.sort(function (a, b) {
		var numA:number = +a.price;
		var numB:number = +b.price;
        return  numA-numB;
    });
	 
  }
  
  sortByPriceDesc() {
	  
	this.products.sort(function (a, b) {
		var numA:number = +a.price;
		var numB:number = +b.price;
        return  numB-numA;
    });
	 
  }
  
  constructor() { }
  

  ngOnInit(): void {
  }

}
