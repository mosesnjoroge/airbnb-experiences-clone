import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Badge } from "react-bootstrap";

export default function ExperienceCards () {

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
      <Card className="card-layout border-0">
        {/* cloudinary render image */}
          <AdvancedImage cldImg={myImage} className = 'image-layout'/>
          <Badge bg="light" text="dark" className="overlay-text">
            SOLD OUT
          </Badge>
        <Card.Body>
          <Card.Title>
            <FontAwesomeIcon icon={faStar}/>5(6)
              Online
          </Card.Title>
          <Card.Text>
            Life lessons with katie Zaferes
          </Card.Text>
          <Card.Text>
            <strong> From $136</strong> / person
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card-layout border-0">
        <AdvancedImage cldImg={myImage} className = 'image-layout'/>
        <Badge bg="light" text="dark" className="overlay-text">
          ONLINE
        </Badge>
        <Card.Body>
          <Card.Title>
            <FontAwesomeIcon icon={faStar} /> 5(30)
            Online
          </Card.Title>
          <Card.Text>
            Learn Wedding Photography
          </Card.Text>
          <Card.Text>
            <strong> From $125</strong> / person
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="card-layout border-0">
        <AdvancedImage cldImg={myImage} className = 'image-layout'/>
        <Card.Body>
          <Card.Title className="title-reposition">
            <FontAwesomeIcon icon={faStar} /> 4.8(2)
            Norway
          </Card.Title>
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
