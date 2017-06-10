import { OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';
export declare class BookOverviewComponent implements OnInit {
    private bookService;
    currentBooks: Book[];
    constructor(bookService: BookService);
    ngOnInit(): void;
    thereAreBooksToDisplay(): boolean;
}
