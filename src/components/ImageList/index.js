import React from "react";
import "./index.css";
import ImageCard from "../ImageCard";

const ImageList = props => (
  <div className="image-list">
    {props.images.map(image => {
      return <ImageCard key={image.id} image={image} />;
    })}
  </div>
);
export default ImageList;
