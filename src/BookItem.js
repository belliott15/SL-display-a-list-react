import React from 'react';

export default function BookItem({ title, author, publisher, year, synopsis }) {
  return (
    <div className="book-item">
      <h2>{title}</h2>
      <p>published by {publisher} in {year}</p>
      <div>
        <div key={author.id}>
          <h3>{author.name}</h3>
          <p>DOB: {author.birthday}</p>
          <p>Activity: {author.isAlive}</p>
        </div>
      </div>
      <p><b>Synopsis:</b> {synopsis}</p>
    </div>
  );
}
