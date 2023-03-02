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
  books: any;
  constructor(
    private bookService: BookService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit() {
    //load in the isbn array in the ids
    this.activatedroute.data.subscribe((data: any) => {
      this.ids = data.book_ids;
    });

    console.log(this.ids);
    let test_id = this.ids[0];
    this.books = this.bookService.getBook(test_id).subscribe((data: any) => {
      console.log(data);
    });

    //use the bookService to load in books
  }
}
