import React from "react";
import type { Lockfile } from "loli-lcu-client";

export const ExternalLink = ({
  uri,
  ...props
}: {
  uri: string;
  [n: string]: any;
}) => {
  return (
    <a
      href={uri}
      className=""
      onClick={(e) => {
        e.preventDefault();
        window.electron.openExternal(uri);
      }}
      {...props}
    />
  );
  //   return <div>ExtenalLink</div>;
};
