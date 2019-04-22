import React, { Component } from 'react';
import '../css/book.css';

class Book extends Component {

    componentWillMount() {
        this.setState({
            books: [
                {
                    title: this.props.title,
                    author: this.props.author,
                    year: this.props.year,
                    genre: this.props.genre
                }
            ]
        })
    }

    handleEdit() {
        this.setState({
            editMode: true
        });
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


    render() {

        let titleElement, authorElement, yearElement, genreElement;
        if (this.state.editMode) {
            titleElement = <textarea ref="titleContent" className="title-textarea" defaultValue={this.state.title}></textarea>

            authorElement = <textarea ref="authorContent" className="author-textarea" defaultValue={this.state.author}></textarea>

            yearElement = <textarea ref="yearContent" className="year-textarea" defaultValue={this.state.year}></textarea>

            genreElement = <textarea ref="genreContent" className="genre-textarea" defaultValue={this.state.genre}></textarea>

        }
        else {
            titleElement = <h5>{this.state.title}</h5>
            authorElement = <h5>{this.state.author}</h5>
            yearElement = <h5>{this.state.year}</h5>
            genreElement = <h5>{this.state.genre}</h5>
        }


        return (
            <div className='col-sm-4'>
                <div className='card card-view'>
                    <div className='card-body'>
                        <h4 className='card-title'>{titleElement}</h4>
                        <h5>{authorElement}</h5>
                        <h5>{yearElement}</h5>
                        <h5>{genreElement}</h5>
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