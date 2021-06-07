import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import WarningSign from "./components/WarningSign"
import MyBadge from "./components/MyBadge"
import SingleBook from "./components/SingleBook"
//for pass a single book at a time i need to import all the books
import fantasyBooks from "./fantasyBooks.json"
import BookList from "./components/BookList"
import BookDetails from "./components/BookDetails" 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text="Run to get your favorite book!" />
        <MyBadge text="NEW!" color="info" />
        {/* here i need to pass a book property, that will be one whole book 
        (so the book object containing all the book information ) 
        one nice trick is, whenever we have a prop inside a component (so an object too)
        we can use {book} instead of writing props.book.XXX */}
        <SingleBook book={fantasyBooks[27]} />
        
        {/* now I'll call BookList down here, passing the whole list/array of objects (the whole JSON file)*/}
        <BookList books={fantasyBooks} />
      </header>
    </div>
  )
}
export default App
