import { useEffect } from "react";

export const useClickOutsideListener = (
  ref: any,
  callback: (event: MouseEvent) => void
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      const t = event.target as HTMLDivElement;
      // console.log(t.onclick);
      // console.log("ohhoh");
      if (ref.current && !ref.current.contains(event.target)) {
        callback(event);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
