import React from "react";
import Card from 'react-bootstrap/Card';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Badge, Container } from "react-bootstrap";

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
   myImage.resize(fill().width(150).height(150));

  return (
    <Container className="card-group border-0">
      <div>
        {/* cloudinary render image */}
        <AdvancedImage cldImg={myImage} className = 'image-layout card-img-top'/>

        {/* <Badge bg="light" text="dark" className="overlay-text"> */}
          {props.status}
        {/* </Badge> */}
      </div>
      <Card.Body>
        <p>
          <FontAwesomeIcon icon={faStar}/>{props.rating}
          {props.status}
        </p>
        <p>
          {props.caption}
        </p>
        <p>
          <strong> From ${props.price}</strong> / person
        </p>
      </Card.Body>
    </Container>
  );

}
