import React from 'react';
import BookList from './booksComponents/BookList';
import AddBookForm from './booksComponents/AddBooForm';
import AddForm from './booksComponents/AddForm';

function Books() {
  return (
    <div>
      <BookList />
      <AddBookForm />
      <AddForm />
    </div>
  );
}

export default Books;
