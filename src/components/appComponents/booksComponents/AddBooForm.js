import React from 'react';

function AddBookForm() {
  return (
    <div>
      <h2>Add  NEW BOOK</h2>
      <form>
        <input type="text" name="title" placeholder="Book title" />
        <button type="button" className="add-btn btn-primary">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBookForm;
