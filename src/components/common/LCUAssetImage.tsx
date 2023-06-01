import React, { useEffect, useRef, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type LazyLoadImageProps = Parameters<typeof LazyLoadImage>[0];

function _arrayBufferToBase64(buffer: ArrayBuffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}

export const LCUAssetImage = ({
  uri,
  ...p
}: { uri: string } & LazyLoadImageProps) => {
  const [b64, setB64] = useState<string | null>(null);

  useEffect(() => {
    window.electron.lcuRequestAsset(uri).then((buffer) => {
      setB64(_arrayBufferToBase64(buffer));
    });
  }, [uri]);

  return (
    <LazyLoadImage
      //   placeholderSrc={`./dragontail/img${placeholderSrc}`}
      src={b64 ? `data:image/jpg;base64, ${b64}` : ""}
      {...p}
    />
  );
};
