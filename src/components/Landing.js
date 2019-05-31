import React from 'react';
import './landing.scss';
import {Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle} from 'reactstrap';

class Landing extends React.Component {
  render() {
    return(

      <div>
        <Card className="card">
          <CardBody>
            <CardTitle className="title">Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
          </CardBody>
          <CardImg width="100%" src="https://placeholder.it/300x300" alt="Card image cap" />
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Landing;