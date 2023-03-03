import { Component, OnInit } from '@angular/core';
//import { ViewBookComponent } from './view-book/view-book.component';
import { BookService } from '../book.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  constructor(
    private bookService: BookService,
    private activatedroute: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  showCart() {
    console.log(this.cartService.getItems());
  }
}
