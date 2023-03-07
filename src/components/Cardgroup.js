import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Cardgroup () {

  return (
    <CardGroup className = 'container'>
      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Rating goes here - </Card.Title>
          <Card.Text>
            Life lessons with katie Zaferes
          </Card.Text>
          <Card.Text>
          <strong> From $136</strong> / person
          </Card.Text>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Rating goes here -</Card.Title>
          <Card.Text>
            Learn Wedding Photography
          </Card.Text>
          <Card.Text>
          <strong> From $125</strong> / person
          </Card.Text>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Rating goes here -</Card.Title>
          <Card.Text>
            Group Mountain Biking
          </Card.Text>
          <Card.Text>
            <strong> From $50</strong> / person
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>



  );

}
