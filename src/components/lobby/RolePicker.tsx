import { useClickOutsideListener } from "@/clickOutside";
import { RoleIcon } from "../RoleIcon";
import { Tooltip } from "../common/Tooltip";
import { useRef } from "react";

const allRoles = [
  "top",
  "jungle",
  "middle",
  "bottom",
  "utility",
  "fill",
  // "unselected"
] as const;
export type Role = (typeof allRoles)[number];

export const RolePicker = ({
  visible,
  setVisible,
  current,
  setRole,
}: {
  visible: boolean;
  setVisible: (n: boolean) => void;
  current: Role;
  setRole: (n: Role) => void;
}) => {
  const ref = useRef(null);

  useClickOutsideListener(ref, () => {
    setVisible(false);
  });
  return (
    <Tooltip
      data-tooltip-place="right"
      classNameExtend="absolute z-50"
      delayHide={0}
      isOpen={visible}
      noArrow={false}
    >
      <div ref={ref}>
        <div className="role-picker flex flex-row">
          {allRoles.map((role) => (
            <RoleIcon
              key={role}
              position={role}
              invert={true}
              // opacity={currentRole.toLowerCase() === role ? 1 : 0.4}
              className={`${
                current === role ? "opacity-100" : "opacity-40"
              } hover:opacity-60`}
              onClick={() => {
                setRole(role);
                setVisible(false);
              }}
            />
          ))}
        </div>
      </div>
    </Tooltip>
  );
};
