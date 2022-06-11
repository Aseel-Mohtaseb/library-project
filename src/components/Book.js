const Books = (props) => {
    return (
        <div className='card'>
            <img className='img-card' src={props.item?.image} />
            <div class='card-container'>
                <h4 id='book-title'>{props.item?.title}</h4>
                <h4 id='book-author'>{props.item?.author}</h4>
                <p id='book-desc'>{props.item?.description}</p>
            </div>
        </div>

    )
}

export default Books
