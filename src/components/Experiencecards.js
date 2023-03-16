import React from "react";
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
   myImage.resize(fill().height(175));

  return (
    <div className="card-experience border-0">
      <div className = 'image-layout'>
        {/* cloudinary render image */}
        <AdvancedImage cldImg={myImage} />

        <Badge bg="light" text="dark" className="overlay-text">
          {props.status}
        </Badge>

        <span>
          <FontAwesomeIcon icon={faStar}/>{props.rating}
          {props.status}
        </span>
      </div>
        <p>{props.caption}</p>
        <p><strong> From ${props.price}</strong> / person</p>
    </div>
  );

}
