import React from 'react';
import BookItem from './BookItem.js';

export default function BookList({ books }) {
  return (
    <div>
      {books.map((book) => <BookItem key={book.id} {...book} />)}
    </div>
  );
}

