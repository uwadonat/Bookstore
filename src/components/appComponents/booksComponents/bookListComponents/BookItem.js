import React from 'react';
import PropTypes from 'prop-types';

function BookItem() {
    return (
        <div classname="book-item">
            <div className="col">
                <div className="book-name">{props.name}</div>
                <div className="book-title">{props.title}</div>
                <div className="book-author">{props.author}</div>
                <div>
                    <button type="button">Comments</button>
                    <button type="button">Remove</button>
                    <button type="button">Edit</button>
                </div>
            </div>
            <div className="col">
                <span className="progress-chart" />
                <span>
                    {prog}
                    %
                    <br />
                    {' '}
                    completed
                </span>
            </div>
            <div class="col">
                <span>CURRENT CHAPTER</span>
                <span>CHAPTER 17</span>
                <button type="button">UPDATE PROGRESS</button>
            </div>
        </div>
    );
}

BookItem.proptypes = {
    name: Proptypes.string.isrequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isrequired,
    prog: PropTypes.number.isRequired,
};

export default BookItem;