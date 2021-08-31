import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../../redux/books';

function AddBookForm() {
  const dispatch = useDispatch();
  const [formState, setstate] = usestate({ title: '', author: '', category: '', });

  function handleChange(e) {
      settFormState({ ...formState, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
      dispatch(addBook(formState));
      e.preventDefault();
      setFormState({
          ...formState, title: '', author: '', category: '',
      });
  }

  return (
    <div>
      <h2>Add NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" value={formState.title} onChange={handleChange}/>
        <input type="text" placeholder="Author" value={formState.author} onChange={handleChange}/>
        <select name="category" defaultValue="Category" value={formState.category} onChange={handleChange}>
          <option value="">Category</option>
          <option value="">Sci-Fi</option>
          <option value="">Action</option>
        </select>
        <button type="button" className="add-btn btn-primary">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default AddBookForm;
