import React from 'react';
import {
    Card, Button, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';

class MyFooterComponent extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </CardBody>
                    <CardFooter className="text-muted">Footer</CardFooter>
                </Card>
            </div>
        );
    }
}

export default MyFooterComponent;