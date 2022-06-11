import Book from './Book';
import React, { useState } from 'react';

const BooksList = (props) => {
    const [searchInput, setSearchInput] = useState("");

    return (
        <div>
            <div id='search-div'>
                <input
                    id='search-input'
                    placeholder='Enter Search Query'
                    onChange={(e) => setSearchInput(e.target.value
                    )}
                ></input>
            </div>

            <div id='books-container'>
                {
                    props.books.filter((val)=>{
                        if(searchInput == ''){
                            return val
                        } else if (val.title.toLowerCase().includes(searchInput.toLowerCase())){
                            return val
                        } 
                    }).map(item => <Book item={item} />)
                }
            </div>
        </div>

    )
}

export default BooksList;