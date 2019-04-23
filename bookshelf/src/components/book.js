import React, { Component } from 'react';
import '../css/book.css';

const GENERIC_BOOK_TITLE = 'New Book Title'
const GENERIC_BOOK_AUTHOR = 'New Book Author'
const GENERIC_BOOK_YEAR = 'New Book Year'
const GENERIC_BOOK_GENRE = 'New Book Genre'

class Book extends Component {

    componentWillMount() {
        this.state = {


            title: GENERIC_BOOK_TITLE,
            author: GENERIC_BOOK_AUTHOR,
            year: GENERIC_BOOK_YEAR,
            genre: GENERIC_BOOK_GENRE,
            editMode: false


        }
    }

    handleEdit() {
        this.setState({
            editMode: true
        });
    }

    handleDelete() {
        this.props.deleteHandler(this.props.id)
    }

    handleSave() {
        this.setState({
            title: this.refs.titleContent.value,
            author: this.refs.authorContent.value,
            year: this.refs.yearContent.value,
            genre: this.refs.genreContent.value,
            editMode: false

        });

    }

    handleRead() {
        this.setState(
            {
                readMode: true,

            }
        );
    }

    handleUnread() {
        this.setState(
            {
                readMode: false,

            }
        );
    }


    render() {

        let titleElement, authorElement, yearElement, genreElement, buttonArea;
        if (this.state.editMode) {
            titleElement = (<textarea ref="titleContent" className="title-textarea" placeholder={this.state.title}></textarea>)

            authorElement = (<textarea ref="authorContent" className="author-textarea" placeholder={this.state.author}></textarea>)

            yearElement = (<textarea ref="yearContent" className="year-textarea" placeholder={this.state.year}></textarea>)

            genreElement = (<textarea ref="genreContent" className="genre-textarea" placeholder={this.state.genre}></textarea>)

            buttonArea = (
                <div>
                    <button className='btn btn-info' onClick={this.handleSave.bind(this)}>
                        Save
                  </button>
                </div>
            )

        }
        else if (this.state.readMode) {
            titleElement = <h4>{this.state.title}</h4>
            authorElement = <h5>{this.state.author}</h5>
            yearElement = <h5>{this.state.year}</h5>
            genreElement = <h5>{this.state.genre}</h5>
            buttonArea = (
                <div>
                    <button
                        className='btn btn-warning'
                        onClick={this.handleEdit.bind(this)}
                    >
                        Edit
                  </button>

                    <button
                        className='btn btn-danger'
                        onClick={this.handleDelete.bind(this)}
                    >
                        Delete
                    </button>

                    <button className="btn btn-success" onClick={this.handleUnread.bind(this)}>Read
                        </button>



                </div>


            )
        }
        else {
            titleElement = <h4>{this.state.title}</h4>
            authorElement = <h5>{this.state.author}</h5>
            yearElement = <h5>{this.state.year}</h5>
            genreElement = <h5>{this.state.genre}</h5>
            buttonArea = (
                <div>
                    <button
                        className='btn btn-warning'
                        onClick={this.handleEdit.bind(this)}
                    >
                        Edit
                  </button>

                    <button
                        className='btn btn-danger'
                        onClick={this.handleDelete.bind(this)}
                    >
                        Delete
                    </button>
                    <button className="btn btn-warning" onClick={this.handleRead.bind(this)}>Unread</button></div>
            );
        }



        return (
            <div className='col-sm-4'>
                <div className='card card-view'>
                    <div className='card-body'>
                        {titleElement}
                        {authorElement}
                        {yearElement}
                        {genreElement}
                        {buttonArea}
                    </div>

                </div>
            </div>
        )
    }

}

Book.defaultProps = {
    title: 'Title',
    author: 'Author',
    year: 'Year',
    genre: 'Genre'
};
export default Book;