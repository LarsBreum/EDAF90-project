import { Component, OnInit } from '@angular/core';
//import { ViewBookComponent } from './view-book/view-book.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit{
  shoppingCart: any [] = [];

  ngOnInit(): void {

  }

  getPrice(){
    let total = 0;
    for(let item of this.shoppingCart){
      total += item.number_of_pages;
    }
    return total;
  }
  
  removeItem(index: number){
    this.shoppingCart.splice(index, 1);  
  }

  clearCart(){
    this.shoppingCart = [];
  }
}


