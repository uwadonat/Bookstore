import React from 'react';

function BookForm() {
  return (
    <div>
      <h2>Add NEW BOOK</h2>
      <form>
        <input
          type="text"
          name="title"
          placeholder="Book title"
        />
        <select
          name="category"
        >
          <option value="" hidden>
            Category
          </option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Action">Economy</option>
        </select>
        <button type="submit" className="add-btn">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default BookForm;
