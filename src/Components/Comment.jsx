import React from 'react';
import {Container, Col, Button, Row, FormGroup, Label, Input} from 'reactstrap';

class Comment extends React.Component {
    state = {
        comments: [],
        isLoading: true,
        errMessage: undefined
    }  
    
    render() {
        return (<>
            <Container>
                <Row>
                    <Col>
                <h3>Comment Form</h3>
                {/* user ID */}
                <FormGroup>
                    <Label for="Id" sm={2}>{this.props.elementId}</Label>
                    <Input type="text" id="{elementId}" placeholder="idInfo"/>   
                </FormGroup>
                {/* end user ID */}
                </Col>
                {/* Rating Pulldown Menu */}
                <Row>
                <Col>
                <FormGroup>
                        <Label for="rating">{this.props.rate}</Label>
                        <Input type="select" id="ratingNumber">
                        {/* value={this.state.book.rate} onChange={this.handleInput} */}
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    </Col>
                    </Row>
                   {/* End Rating Pulldown Menu */}
                {/* Comment Box */}
                <Col>
                <FormGroup className="col-md-6">
                    <Label for="exampleText" lg={5}>Text Area</Label>
                    <Input type="textarea" name="text" placeholder="commentArea" />   
                </FormGroup>
                </Col>
                {/* End Comment Box */}
                {/* Submit Button */}
                <Col sm={{ size: 10, offset: 2 }}>
                <FormGroup check row>
                    <Button>Submit Comments!</Button>
                </FormGroup>
                </Col>
                {/* End Submit Button */}
                </Row>
                <br/>
            </Container>
        </>);
    }

    // componentDidMount = async() => {
    //     const response = await fetch ("https://localhost:7000/comments")
    //     const jsonComments = await response.json();
        
    //     this.setState({
    //     comments: jsonComments
    // });
    // } 

    // submitComments = async () => {
    //     this.setState({
    //             isLoading: true
    //         });
    //     } 
    
}
 
export default Comment;

