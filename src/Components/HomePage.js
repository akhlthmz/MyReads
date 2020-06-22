import React from "react";
import { Link } from "react-router-dom";

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
    } else {
      WTRbooks.push(book);
    }
  });
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <BooksList
          booksSet="Currently Reading"
          toUpdate={props.toUpdate}
          books={CRbooks}
        />
        <BooksList booksSet="Read" toUpdate={props.toUpdate} books={Rbooks} />
        <BooksList
          booksSet="Want To Read"
          toUpdate={props.toUpdate}
          books={WTRbooks}
        />
      </div>
      <div className="open-search">
        <Link to="/search">
          <button />
        </Link>
      </div>
    </div>
  );
}
export default HomePage;
