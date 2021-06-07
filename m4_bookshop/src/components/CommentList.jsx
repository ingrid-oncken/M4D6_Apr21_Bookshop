import { Component } from "react"
import CommentListItem from "./CommentListItem"
import { FormControl } from "react-bootstrap"
import CommentCreator from "./CommentCreator"

class CommentList extends Component {
  state = {
    commentFilter: "",
  }

  render() {
    return
    ;<>
      <FormControl
        value={this.state.commentFilter}
        onChange={(e) =>
          this.setState({ commentFilter: e.currentTarget.value.toLowerCase() })
        }
      ></FormControl>
      <ul>
        {this.props.comments &&
          this.props.comments
            .filter(
              (coment) =>
                coment.coment
                  .toLowerCase()
                  .indexOf(this.state.commentFilter) !== -1
            )
            .map((comment) => <CommentListItem key={comment._id} />)}
      </ul>
      <CommentCreator bookId={this.props.bookId} onNewComment={this.props.onNewComment}></CommentCreator>
    </>
  }
}

export default CommentList
