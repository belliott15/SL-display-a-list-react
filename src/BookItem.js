import React from 'react';

export default function BookItem({ title, author, publisher, year, synopsis }) {
  return (
    <div className="book-item">
      <h1>{title}</h1>
      <p>published by {publisher} in {year}</p>
      <div>
        <div key={author.id}>
          <h3>{author.name}</h3>
          <p>{author.birthday}</p>
          <p>{author.isAlive}</p>
        </div>
      </div>
      <p>{synopsis}</p>
    </div>
  );
}
