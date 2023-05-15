import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type LazyLoadImageProps = Parameters<typeof LazyLoadImage>[0];

export const AssetImage = (props: { uri: string } & LazyLoadImageProps) => {
  const { uri, ...p } = props;

  return (
    <LazyLoadImage src={`./dragontail/13.9.1/img${uri}`} {...p}></LazyLoadImage>
    // <img
    //   className={"object-scale-down " + props.className}
    //   src={`./dragontail/13.9.1/img${props.uri}`}
    // />
  );
};
