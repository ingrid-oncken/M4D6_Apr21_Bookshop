import React from "react"
import SingleBook from "./SingleBook"
import { Col, Container, Form, Row } from "react-bootstrap"
import BookDetails from "./BookDetails"

//I need to display multiple books inside my booklist
//the booklist is receiveing some props, in this case props is gonna be an array of books
//(each book being an object)

class BookList extends React.Component {
  state = {
    //inside the state I need to create a place for the query/string, that I'll call
    //searchQuery, and the initial value of it will be empty
    searchQuery: "",
    selectedBook: undefined,
  }

  //here I'll make my returned value to be my JSX
  render() {
    return (
      <Container>
        {/* I am creating a second row (although it looks first) 
        to contain the search bar, where I'll write the input */}
        <Row>
          <Col>
            <Form>
              <Form.Label className="mt-3">Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2 my-3"
                // now to conect this search input with the query that will hold the strings writen here
                //to reflect the string from there, I need to send the value
                value={this.state.searchQuery}
                //now I've got to set an event listener and do a setState
                //overighting the empty search query with the string inputed
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form>
          </Col>
        </Row>
        <BookDetails book={this.state.selectedBook} />
        <Row>
          {/* inside the row I need to create multiples single books, and I'll need to create
  multiple single books */}
          {
            // here I'll map my props (remembering that my props can be {books} so an array of objects)
            //after transforming this function into a class books beacame this.books.props where it is the object destructuring
            this.props.books
              .filter((index) =>
                index.title.toLowerCase().includes(this.state.searchQuery)
              )
              .map((index) => (
                //here I want to return some JSX from every 'mapped' book, that will be inside a col
                <Col xs={3}>
                  {/* here I have to invoke a single book passi*/}
                  <SingleBook book={index} />
                </Col>
              ))
          }
        </Row>
        {/* exercise 5 asks to create an input field and sugest that is should be made here,
    so I had to change this that used to be a function to a class */}
      </Container>
    )
  }
}
export default BookList
