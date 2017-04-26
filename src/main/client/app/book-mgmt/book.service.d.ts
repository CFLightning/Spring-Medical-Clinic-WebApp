export declare class BookService {
    private books;
    private sequencer;
    findOne(id: number): Book;
    save(bookToSave: Book): void;
    findAll(): Book[];
    private findById(id);
}
export declare class Book {
    private _id;
    private _author;
    private _title;
    constructor(authors?: string, title?: string);
    id: number;
    author: string;
    title: string;
}
