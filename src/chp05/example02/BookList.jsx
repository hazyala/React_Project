import React from "react";
import './BookList.css';
import Book from "./Book";

const books = [
    {
        title: "The Art of React",
        author: "김민주",
        coverImage: "https://cdn.pixabay.com/photo/2021/01/21/15/54/books-5937716_1280.jpg"
    },
    {
        title: "Learning React",
        author: "윤인성",
        coverImage: "https://cdn.pixabay.com/photo/2019/06/29/05/42/books-4305459_1280.jpg"
    },
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        coverImage: "https://cdn.pixabay.com/photo/2023/03/08/23/21/books-7838952_1280.jpg"
    }
];

function BookList() {
    return (
      <div className={"bookListWrapper"}>
          {
              books.map((book) => {
                  return (
                    <Book
                    title={book.title}
                    author={book.author}
                    coverImage={book.coverImage}
                    />
                  );
              })
          }
      </div>
    );
}

export default BookList;