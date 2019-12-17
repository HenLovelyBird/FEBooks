import React from 'react';
import {Container, Row, Col} from 'reactstrap'
import MyNavComponent from './MyNavComponent';
// import MyFooterComponent from './MyFooterComponent';
import WelcomComponent from './WelcomeComponent';
// import MyBookstore from "../data/scifi.json"
// import LatestReleaseComponent from './LatestReleaseComponent';
// import Comment from './Comment';
import BookDetails from './BookDetails';
// import Comment from './Comment';



class MainComponent extends React.Component {
    state ={ 
        search:'',
        selectedBook: undefined,
        books: [],
        comments: []
    }

    render() {
        return (
            <Container>
               <Row>
                   <Col md="12">
                      <MyNavComponent> </MyNavComponent> 
                   </Col>
                   <Col md="12">
                      <WelcomComponent> </WelcomComponent>
                   </Col>

        {this.state.selectedBook && <BookDetails selectedBook={this.state.selectedBook}/> }

        {/* <Col md="10" lg="12">
        <Comment />
        </Col> */}
        
            {/* <Input className="my-5" type="text" value={this.state.search} 
            onChange={(val) => this.setState({search: val.target.value.toLowerCase()})} 
            placeholder="Type to search">
            </Input> */}

            
                <Container >
                    <Row className="md-3">
                        <Col>
                        {this.state.books.map((book, index) =><> 
                        <h6><b>{book.title}</b></h6>
                        <Row className="ml-2">
                            <img src={book.img} 
                            alt="bookcover" 
                            style={{maxwidth: "100%"}}>
                            </img>
                        <Col>
                        <div key={index}></div>
                        <div><b>Genre:</b> {book.category}</div>
                        <div><b>Price:</b> €{book.price}</div>
                        </Col>
                        </Row>
                        </>)}
                        </Col>
                    </Row>
                </Container>
            
                

                {/* <Col md="12">
                    {this.state.myArray.map((entry, index) => <h2 key={index}>{entry}</h2>)}
                </Col> */}
                   {/* <Col md="12">
                      <MyFooterComponent> </MyFooterComponent> 
                   </Col> */}
               </Row>
            </Container>
        );
    }

    componentDidMount = async () => {
        const resp = await fetch ("https://henibebooks.herokuapp.com/books")
        const jsonBooks = await resp.json();

        this.setState({
            books: jsonBooks
        });
    }

    //     componentDidMount = async() => {
    //     const response = await fetch ("https://henibebooks.herokuapp.com/comments")
    //     const jsonComments = await response.json();
        
    //     this.setState({
    //     comments: jsonComments
    // });
    // } 
}

export default MainComponent;