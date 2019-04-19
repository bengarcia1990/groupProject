import React, { Component } from 'react';
import '..css/book.css';

class Book extends Component {
    constructor(){
        super();
    }
    render(){
        <div className='col-sm-4'>
            <div className='card card-view'>
            <div className='card-body'>
            <h4 className='card-title'>{this.props.title}</h4>
                <h5>{this.props.author}</h5>
                <h5>{this.props.year}</h5>
                <h5>{this.props.genre}</h5>
            </div>
            </div>
            </div>
    }
}

Book.defaultProps = {
    title: 'Title',
    author: 'Author',
    year: 'Year',
    genre: 'Genre'
};
export default Book;