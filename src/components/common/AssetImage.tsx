import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type LazyLoadImageProps = Parameters<typeof LazyLoadImage>[0];

export const LCUAssetImage = ({
  uri,
  placeholderSrc,
  ...p
}: { uri: string } & LazyLoadImageProps) => {
  return (
    <LazyLoadImage
      placeholderSrc={`./dragontail/img${placeholderSrc}`}
      src={`./dragontail/img${uri}`}
      {...p}
    />
  );
};
