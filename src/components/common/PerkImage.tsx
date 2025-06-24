import { LazyLoadImageProps } from "react-lazy-load-image-component";
import { DragontailAssetImage } from "./AssetImage";

export const PerkImage = ({
  active,
  disabled = false,
  uri,
  size = 6,
  ...p
}: {
  /** URI from iconPath of a perk */ uri: string;
  size: number;
  active: boolean;
  disabled?: boolean;
} & LazyLoadImageProps) => {
  return (
    <div
      className={`relative flex inset-0 m-auto gap-8 w-${String(
        size
      )} h-${String(size)}`}
    >
      <div
        key={`border-${uri}`}
        className={`rounded-full border-2 w-${String(size + 4)} h-${String(
          size + 4
        )} absolute animate-[appear-brightness_0.8s_ease-in_forwards] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
          active ? "border-white" : "border-transparent"
        }`}
      ></div>

      <DragontailAssetImage
        uri={uri.replace("/lol-game-data/assets/v1", "")}
        className={`absolute inset-0 m-auto animate-[appear-brightness_0.3s_ease-in_forwards] w-${String(
          size
        )} h-${String(size)} 
        transition ${active ? "scale-110" : "brightness-50 hover:scale-110"} ${
          disabled ? "opacity-40" : ""
        }`}
        style={{ left: 0, right: 0, top: 0, bottom: 0 }}
        key={`image-${uri}`}
        {...p}
      />
    </div>
  );
};
