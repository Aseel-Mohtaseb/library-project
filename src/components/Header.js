import book from './../assets/images/book.png';

const Header = () => {
    return (
        <div id='header'>
            <div id='app-bar'>
                <img id='book-img' src={book}/>
                <h1 id='header-title'> PSEU Library system </h1>
                <button id='login-btn'>Login</button>
            </div>

            <h2 id='title'>
                List of books in our library
            </h2>
        </div>
    )
}

export default Header
