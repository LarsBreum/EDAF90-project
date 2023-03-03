import { Component, EventEmitter, Input } from '@angular/core';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ids: any;
  books: any[];
  constructor(
    private bookService: BookService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    //load in the isbn array in the ids
    this.activatedroute.data.subscribe((data: any) => {
      this.ids = data.book_ids;
    });

    //idk why I have to use this var. I cannot directly assign like this: this.books.push(data)
    let booksObjects = [];

    this.ids.forEach((id) => {
      this.bookService.getBook(id).subscribe((data) => {
        booksObjects.push(data[`ISBN:${id}`]);
      });
    });
    this.books = booksObjects;
    console.log(this.books);

    //use the bookService to load in books
  }
}
