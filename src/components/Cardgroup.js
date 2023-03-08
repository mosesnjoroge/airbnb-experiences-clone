import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";



export default function Cardgroup () {

  // Create a Cloudinary instance and setting cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
   const myImage = cld.image('docs/models');

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
   myImage.resize(fill().width(250).height(250));




  return (
    <CardGroup className = 'container'>
      <Card>
        <Card.Img variant="top">
          <AdvancedImage cldImg={myImage} />
        </Card.Img>
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

      <Card>
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
