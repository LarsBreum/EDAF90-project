import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService],
})
export class AppComponent implements OnInit {
  title = 'Kampus Bokhandenl';
  book: any;
  books: any;
  numItems: number;

  constructor(
    private bookService: BookService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const book_ids = [
      '0596007124',
      '0321992784',
      //'0321204667',
      '0321125215',
      '0321334876',
      '0321751043',
      '0321712943',
      '0321832051',
      //'0321842684',
      '0321701275',
    ];

    this.books = book_ids.map((id: any) =>
      this.bookService.getBook(id).subscribe((data: any) => {
        let author_array: any[] = [];
        data[`ISBN:${id}`].authors.forEach((author: any) => {
          author_array.push(author.name);
        });
        return {
          title: data[`ISBN:${id}`].title,
          author_name: author_array.join(', '),
          publish_date: data[`ISBN:${id}`].publish_date,
          thumbnail: data[`ISBN:${id}`].thumbnail_url,
        };
      })
    );

    console.log(this.books.title);
  }

  getBooks(): string {
    console.log('getBooks: ' + this.books);
    let out: string = this.books.map((book: any) => {
      `<p>Title: ${book.title}</p>`;
    });
    console.log(out);
    return out;
  }

  getNumberItems() {
    return this.cartService.getNumberItems();
  }
}

// let author_array: any = [];

//       data['ISBN:0596007124'].authors.forEach((author: any) => {
//         author_array.push(author.name);
//       });

//       this.book = {
//         title: data['ISBN:0596007124'].title,
//         author_name: author_array.join(', '),
//         publish_date: data['ISBN:0596007124'].publish_date,
//       };
