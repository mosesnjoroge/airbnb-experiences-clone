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

  let badgeText
  if (props.availability === 0) {
    badgeText = 'SOLD OUT'
  } else if (props.location === 'Online'){
    badgeText = 'ONLINE'
  }

  return (
    <div className="card-experience border-0 text-center">
      <div className = 'image-layout'>
        {/* cloudinary render image */}
        <AdvancedImage cldImg={myImage} />

        {badgeText && <div className=" badge overlay-text">{badgeText}</div>}
        <span>
          <FontAwesomeIcon icon={faStar}/>{props.rating}
          {props.location}
        </span>
      </div>
        <span>{props.caption}</span>
        <span><strong> From ${props.price}</strong> / person</span>

    </div>
  );

}
