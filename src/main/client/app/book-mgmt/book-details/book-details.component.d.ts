import { OnInit } from '@angular/core';
import { BookService, Book } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
export declare class BookDetailsComponent implements OnInit {
    private bookService;
    private route;
    private router;
    currentForm: NgForm;
    currentBook: Book;
    submitted: boolean;
    private static createErrorMessage(errorObject);
    constructor(bookService: BookService, route: ActivatedRoute, router: Router);
    save(): void;
    getErrorMessageOfField(fieldName: string): string;
    isFieldInvalid(fieldName: string): boolean;
    ngOnInit(): void;
}
