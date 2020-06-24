import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import BooksList from "./BooksList";

function HomePage(props) {
  const books = props.books;
  const CRbooks = [];
  const Rbooks = [];
  const WTRbooks = [];
  books.forEach((book) => {
    if (book.shelf === "currentlyReading") {
      CRbooks.push(book);
    } else if (book.shelf === "read") {
      Rbooks.push(book);
    } else if (book.shelf === "wantToRead") {
      WTRbooks.push(book);
    }
  });
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <BooksList
            booksSet="Currently Reading"
            toUpdate={props.toUpdate}
            defaultValue="currentlyReading"
            books={CRbooks}
          />
          <BooksList
            booksSet="Want To Read"
            toUpdate={props.toUpdate}
            defaultValue="wantToRead"
            books={WTRbooks}
          />

          <BooksList
            booksSet="Read"
            toUpdate={props.toUpdate}
            defaultValue="read"
            books={Rbooks}
          />
        </div>
        <div className="open-search">
          <Link to="/search">
            <button />
          </Link>
        </div>
      </div>
    </div>
  );
}
HomePage.propTypes = {
  books: PropTypes.array.isRequired,
  toUpdate: PropTypes.func.isRequired,
};
export default HomePage;
