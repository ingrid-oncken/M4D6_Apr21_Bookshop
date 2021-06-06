import { Badge } from "react-bootstrap"

//this function is receiven props to be use as a dinamic value for both
//color and text
const MyBadge = (props) => <Badge variant={props.color}>{props.text}</Badge>
export default MyBadge
