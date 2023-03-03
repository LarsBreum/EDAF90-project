import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css'],
})
export class ViewBookComponent implements OnInit {
  book: any;
  constructor(
    private bookService: BookService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const isbn = this.activatedRoute.snapshot.paramMap.get('isbn');
    this.bookService.getBook(isbn).subscribe((data) => {
      this.book = data[`ISBN:${isbn}`];
    });
  }
}
