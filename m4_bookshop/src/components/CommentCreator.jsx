import { Component } from "react"
import { Button, FormControl } from "react-bootstrap"

class CommentCreator extends Component {
  state = {
    rate: 0,
    comment: "",
  }
  sendComment = async () => {
    const toSend = {
      rate: this.state.rate,
      comment: this.state.comment,
      elementId: this.props.bookId,
    }
    const resp = await fetch(
      "https://striveschool.herokuapp.com/api/comments",
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Basic YWRtaW46c3VwZWNyZXQ=",
        },
        method: "POST",
        body: JSON.stringify({ toSend }),
      }
    )
    if (resp.ok) {
      this.props.onNewComment(await resp.json())
    }
  }

  render() {
    return (
      <div>
        <FormControl
          value={this.state.rate}
          onChange={(e) => this.setState({ rate: e.currentTarget.value })}
        ></FormControl>
        <FormControl
          value={this.state.comment}
          placeholder="Comment"
          onChange={(e) => this.setState({ comment: e.currentTarget.value })}
        ></FormControl>
        <Button onClick={this.sendComment}>Add Comment</Button>
      </div>
    )
  }
}
export default CommentCreator
