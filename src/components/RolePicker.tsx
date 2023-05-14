import React from "react";
import { RoleIcon } from "./RoleIcon";

const allRoles = ["top", "jungle", "middle", "bottom", "utility"];

export const RolePicker = ({
  currentRole,
  onPickRole,
}: {
  currentRole?: string;
  onPickRole: (newRole: string) => void;
}) => {
  // const mainHoverOpacity =

  return (
    <>
      <div className="role-picker flex flex-row">
        {allRoles.map((role) => (
          <RoleIcon
            position={role}
            invert={true}
            // opacity={currentRole.toLowerCase() === role ? 1 : 0.4}
            className={`${
              currentRole?.toLowerCase() === role ? "opacity-100" : "opacity-40"
            } hover:opacity-60`}
            onClick={() => {
              onPickRole(role);
            }}
          />
        ))}
      </div>
    </>
  );
};
