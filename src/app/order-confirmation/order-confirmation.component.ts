import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent {
  customerData: any = this.cartService.getCustomerData();
  orderedIsbn: any = this.cartService.getItems();
  orderedBooks: any[] = [];

  constructor(
    private cartService: CartService,
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.orderedIsbn.forEach((isbn) => {
      this.bookService.getBook(isbn).subscribe((data) => {
        this.orderedBooks.push(data[`ISBN:${isbn}`]);
      });
    });
    this.cartService.clearCart();
  }
}
