import React from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Badge } from "react-bootstrap";

export default function ExperienceCards (props) {

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
            {props.status}
          </Badge>
        <Card.Body>
          <Card.Title>
            <FontAwesomeIcon icon={faStar}/>{props.rating}
            {props.status}
          </Card.Title>
          <Card.Text>
            {props.caption}
          </Card.Text>
          <Card.Text>
            <strong> From ${props.price}</strong> / person
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );

}
