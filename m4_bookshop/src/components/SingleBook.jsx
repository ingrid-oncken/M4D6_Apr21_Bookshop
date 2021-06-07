import { Card } from "react-bootstrap"
//to change this function into a class is necessary to import react
import React from "react"
// import CommentCreator from "./CommentCreator"
import CommentList from "./CommentList"
import CommentListItem from "./CommentListItem"

//This was a simple function but exercise 6 asked to change for a class

//this function will receive props as an object from that FantasyBooks.json file
//later I did a object destructuring ans substitute the paramenter from (props) to ({book})
// so I don't need to write props.book.title and can only be props.title
class SingleBook extends React.Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? "3px solid blue" : "none" }}
        style={{ width: "250px" }}
      >
        {/* the src of the image is coming from the object on the FantasyBooks.json
          file, same thing fot the title */}
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>
            {this.props.book.title}
          </Card.Title>
          <Card.Text style={{ color: "gray" }}>
            {this.props.book.category} - {this.props.book.price} €
          </Card.Text>
          <CommentList
            comments={this.state.comments}
            bookId={this.props.bookInfo.asin}
            onNewComment={this.onNewComment}
          />
        </Card.Body>
      </Card>
    )
  }
  onNewComment = (newComment) => {
    this.setState({
      comments: [...this.state.comments, newComment],
    })
  }

  componentDidMount = async () => {
    const resp = await fetch(
      "https://striveschool.herokuapp.com/api/comments/" +
        this.props.bookInfo.asin,
      {
        headers: { Authorization: "Basic YWRtaW46c3VwZXJzZWNyZXQ0" },
      }
    )
    const retrievedComments = await resp.json()
    this.setState({
      comments: retrievedComments,
    })
  }
}

export default SingleBook
