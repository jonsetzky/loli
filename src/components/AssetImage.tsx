import React, { useEffect, useState } from "react";

export const AssetImage = (props: { uri: string; className?: string }) => {
  const [img, setImg] = useState<string>();

  const fetchImage = async () => {
    const img = await window.electron.getLcuAsset(props.uri);
    setImg(img);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <img
      className={"object-scale-down " + props.className}
      src={img !== undefined ? `data:;base64,${img}` : ""}
    />
  );
};
