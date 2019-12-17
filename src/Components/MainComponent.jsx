import React from 'react';
import {Container, Row, Col, Input} from 'reactstrap'
import MyNavComponent from './MyNavComponent';
// import MyFooterComponent from './MyFooterComponent';
import WelcomComponent from './WelcomeComponent';
// import MyBookstore from "../data/scifi.json"
// import LatestReleaseComponent from './LatestReleaseComponent';
// import Comment from './Comment';
import BookDetails from './BookDetails';



class MainComponent extends React.Component {
    state ={ 
        search:'',
        selectedBook: undefined,
        books: []
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
        
            <Input className="my-5" type="text" value={this.state.search} 
            onChange={(val) => this.setState({search: val.target.value.toLowerCase()})} 
            placeholder="Type to search">
            </Input>

            

                   <Col md="12">
                    {this.state.books.map((books, index) => 
                        <BookDetails book={books} key={index} /> 
                    )}
                </Col>

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
}

export default MainComponent;