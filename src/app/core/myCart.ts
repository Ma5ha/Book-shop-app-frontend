import { Book } from '@app/home/recommended-books/core/book';

export interface myCart {
    items: Map<string, any>,
    size: number,
    price: number
}