import React from 'react';
import {Container, Row, Col} from "reactstrap";

class BookDetails extends React.Component {
    state = {
        books: []
    }
    render() {
        return (<>
            <Container>
                <Row>
                    <Col className="md-4">
                    {this.state.books.map(book =><>
                    <span>{book.title}</span>
                    <img src={book.img} alt="bookcover" style={{maxwidth: "100%"}}></img>
                    <div>key={book.asin}</div>
                    <div>{book.category}</div>
                    <div>${book.price}</div>
                    </>)}
                    </Col>
                </Row>
            </Container>
        </>)
    }

    componentDidMount = async () => {
        const resp = await fetch ("http://localhost:7000/books")
        const jsonBooks = await resp.json();

        this.setState({
            books: jsonBooks
        });
    }
}

export default BookDetails;