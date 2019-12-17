import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

class WelcomeComponent extends React.Component {
    state = {  }
    render() { 
        return (  
            <Jumbotron fluid className="bg">
              <Container fluid>
                <h1 className="display-3">Welcome to My Bookstore!</h1>
                <p className="lead">Let' get some books!</p>
              </Container>
            </Jumbotron>
        );
    }
}
export default WelcomeComponent;