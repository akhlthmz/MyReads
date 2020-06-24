import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

function BooksList(props) {
  const { books } = props;
  return (
    <div className="bookshelf">
      <h1 className="bookshelf-title">{props.booksSet}</h1>
      <div className="bookshelf-books">
        <ul className="books-grid">
          {books.map((book) => (
            <Book
              book={book}
              key={book.id}
              toUpdate={props.toUpdate}
              defaultValue={props.defaultValue}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  booksSet: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  toUpdate: PropTypes.func.isRequired,
};
export default BooksList;
