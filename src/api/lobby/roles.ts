import { Role } from "@/components/lobby/RolePicker";

export const setRoles = (
  primary: Role | "unselected",
  secondary: Role | "unselected"
) => {
  window.electron.getLcuUri(
    "/lol-lobby/v2/lobby/members/localMember/position-preferences",
    "put",
    {
      firstPreference: primary.toUpperCase(),
      secondPreference: secondary.toUpperCase(),
    }
  );
};
