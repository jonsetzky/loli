import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type ContextDataType = {
  visible: boolean;
  posX: number;
  posY: number;
};

const containPosWithinArea = (
  pos: [number, number],
  size: [number, number],
  area: [number, number]
): [number, number] => {
  return [
    pos[0] + size[0] >= area[0] ? area[0] - size[0] - 1 : pos[0],
    pos[1] + size[1] >= area[1] ? area[1] - size[1] - 1 : pos[1],
  ];
};

export const ContextMenu = ({
  targetId,
  children,
}: {
  targetId: string;
  children?: any;
}) => {
  const [contextData, setContextData] = useState<ContextDataType>({
    visible: false,
    posX: 0,
    posY: 0,
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contextMenuEH = (event: MouseEvent) => {
      const target = document.getElementById(targetId);

      if (target && target.contains(event.target as any)) {
        event.preventDefault();
        return setContextData((prev) => ({
          visible: true,
          posX: event.clientX,
          posY: event.clientY,
        }));
      }

      if (ref.current && !ref.current.contains(event.target as any))
        return setContextData((prev) => ({ ...prev, visible: false }));
      console.log("clicked");
    };

    const offClickEH = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as any))
        setContextData((prev) => ({ ...prev, visible: false }));
    };

    document.addEventListener("contextmenu", contextMenuEH);
    document.addEventListener("click", offClickEH);
    return () => {
      document.removeEventListener("contextmenu", contextMenuEH);
      document.removeEventListener("click", offClickEH);
    };
  }, [targetId, contextData]);

  useEffect(() => {
    const containedPos = containPosWithinArea(
      [contextData.posX, contextData.posY],
      [ref.current?.offsetWidth ?? 0, ref.current?.offsetHeight ?? 0],
      [window.innerWidth, window.innerHeight]
    );
    setContextData((prev) => ({
      ...prev,
      posX: containedPos[0],
      posY: containedPos[1],
    }));
  }, [contextData.visible]);

  return (
    <div
      ref={ref}
      className="context-menu absolute"
      style={{
        display: `${contextData.visible ? "block" : "none"}`,
        left: contextData.posX,
        top: contextData.posY,
      }}
    >
      {children}
    </div>
    // <div
    //   ref={ref}
    //   className="context-menu"
    //   style={{
    //     position: "absolute",
    //     left: position[0],
    //     top: position[1],
    //     // transform: "translateX(-50%)",
    //     overflow: "hidden",
    //     visibility: visible ? "visible" : "hidden",
    //     zIndex: 1000,
    //   }}
    // >
    //   <div className="flex flex-col min-w-[6rem] text-white bg-black border-[1px] border-white text-sm p-1 gap-0 divide-y divide-neutral-700 whitespace-nowrap leading-5">
    //     <ContextMenuItem>Send message</ContextMenuItem>
    //     <ContextMenuItem>View JSON</ContextMenuItem>

    //     <div>
    //       <ContextMenuItem
    //         onClick={() => {
    //           setVisible(false);
    //         }}
    //       >
    //         View JSON
    //       </ContextMenuItem>{" "}
    //     </div>
    //   </div>
    // </div>
  );
};
