import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any[] = [];
  customerData: any[] = [];

  addToCart(isbn: any) {
    this.items.push(isbn);
  }

  getItems() {
    console.log('--- getItems() ---');
    console.log(this.items);
    return this.items;
  }

  addCustomerData(data) {
    this.customerData.push(data);
  }

  getCustomerData() {
    return this.customerData;
  }

  getNumberItems() {
    return this.items.length;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor() {}
}
