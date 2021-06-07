import { Component } from "react"
import { Row } from "react-bootstrap"
import CommentList from "./CommentList"

class BookDetails extends Component {
  render() {
    return (
      <Row className="my-3">
        {this.props.book ? (
          <div>
            {" "}
            book info
            <CommentList
              comments={this.state.comments}
              bookId={this.props.bookInfo.asin}
              onNewComment={this.onNewComment}
              onDeleteComment={this.onDeleteComment}
              updateComment={this.updateComment}
            />
          </div>
        ) : (
          <div>Click on a Book to load the information </div>
        )}
      </Row>
    )
  }
}

export default BookDetails
