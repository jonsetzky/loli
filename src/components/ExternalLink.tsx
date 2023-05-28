import React from "react";
import type { Lockfile } from "electron/main/lcu/lockfile";

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
