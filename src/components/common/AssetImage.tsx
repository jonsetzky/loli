import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type LazyLoadImageProps = Parameters<typeof LazyLoadImage>[0];

export const AssetImage = ({
  uri,
  placeholderSrc,
  ...p
}: { uri: string } & LazyLoadImageProps) => {
  return (
    <LazyLoadImage
      placeholderSrc={`/dragontail/latest/img${placeholderSrc}`}
      src={`/dragontail/latest/img${uri}`}
      {...p}
    />
    // <img
    //   className={"object-scale-down " + props.className}
    //   src={`./dragontail/13.9.1/img${props.uri}`}
    // />
  );
};
