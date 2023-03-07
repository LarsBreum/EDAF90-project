import { Component, OnInit } from '@angular/core';
//import { ViewBookComponent } from './view-book/view-book.component';
import { BookService } from '../book.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import {
  MatFormFieldModule,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  isbnArr = this.cartService.getItems();
  items: any[] = [];

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    email: '',
    cardNumber: '',
    secCode: '',
  });

  constructor(
    private bookService: BookService,
    private activatedroute: ActivatedRoute,
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isbnArr.forEach((isbn) => {
      this.bookService.getBook(isbn).subscribe((data) => {
        this.items.push(data[`ISBN:${isbn}`]);
      });
    });
    console.log(this.items);
  }

  onSubmit(): void {
    // Process checkout data here
    this.cartService.addCustomerData(this.checkoutForm.value);
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.router.navigate(['/order-confirmation']);
    this.checkoutForm.reset();
  }

  showCart() {
    console.log(this.cartService.getItems());
  }

  getTotalPrice() {
    return this.items.reduce((acc, item) => {
      return acc + (item?.number_of_pages || 500);
    }, 0);
  }
}
