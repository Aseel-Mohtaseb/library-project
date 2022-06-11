import './components/Style1.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { getBooks } from './services/Books';
import BooksList from './components/BooksList';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState([]);//list
  useEffect(() => {
    if (!data.length) {
      getBooks().then((books) => {
        setData(books);
        console.log(books);
      });
    }
  })

  return (
    <div>
      <Header />
      <BooksList books={data} />
      <Footer />
    </div>
  );
}

export default App;
