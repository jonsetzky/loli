import React, {
  createContext,
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

export const CTXContextMenuVisibility = createContext<{
  visible: boolean;
  setVisible: (n: boolean) => void;
}>({
  visible: false,
  setVisible: (n: boolean) => {},
});

/**
 * Target requires the following attributes:
 * - id=\<id-here\>
 * - data-context-menu
 * @param param0
 * @returns
 */
export const ContextMenu = ({
  targetId,
  children,
  label,
}: {
  targetId: string;
  label?: string;
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
      const allTargets: HTMLElement[] = (
        Array(...document.querySelectorAll("[data-context-menu]")).sort(
          (a: any, b: any) => b.offsetTop - a.offsetTop
        ) as HTMLElement[]
      ).filter((e) => e.contains(event.target as any));

      if (allTargets[0] === target) {
        event.preventDefault();
        // event.stopImmediatePropagation();
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
    <CTXContextMenuVisibility.Provider
      value={{
        setVisible: (n) => setContextData((c) => ({ ...c, visible: n })),
        visible: contextData.visible,
      }}
    >
      {" "}
      <div
        ref={ref}
        className="text-sm bg-black text-white leading-3 border-[1px] fixed z-[60]"
        style={{
          display: `${contextData.visible ? "block" : "none"}`,
          left: contextData.posX,
          top: contextData.posY,
        }}
      >
        {!label ? (
          ""
        ) : (
          <h1 className="text-xs font-medium text-black bg-white mt-0 mb-0  pr-1 pl-1 leading-4">
            {label}
          </h1>
        )}
        {children}
      </div>
    </CTXContextMenuVisibility.Provider>

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
