import React from "react";
import LazyLoad from "react-lazy-load";

interface Props {
  src: string;
  height?: number;
  width: number;
  alt: string;
}

const MyImage = ({ src, height, width, alt }: Props) => (
  <div>
    <LazyLoad height={height}>
      <img src={src} height={height} width={width} alt={alt} />
    </LazyLoad>
  </div>
);

export default MyImage;
