import { useClickOutsideListener } from "@/hooks/clickOutside";
import { RoleIcon } from "../common/RoleIcon";
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
      id="role-picker"
      data-tooltip-place="right"
      classNameExtend="absolute bg-black border flex flex-row gap-2"
      delayHide={0}
      isOpen={visible}
      noArrow={false}
      openOnClick={true}
    >
      <div ref={ref} className="flex flex-row gap-2">
        {allRoles.map((role) => (
          <RoleIcon
            key={role}
            position={role}
            invert={true}
            // opacity={currentRole.toLowerCase() === role ? 1 : 0.4}
            className={`w-6 ${
              current === role ? "opacity-100" : "opacity-40"
            } hover:opacity-60`}
            onClick={() => {
              setRole(role);
              setVisible(false);
            }}
          />
        ))}
      </div>
    </Tooltip>
  );
};
