import { Button } from "@/components/ui/button";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface OAuthButtonProps {
  provider: string;
  icon: string | StaticImport;
  bgColor?: string;
  hoverColor?: string;
  onClick?: () => void;
}

export default function OAuthButton({
  provider,
  icon,
  bgColor = "white",
  hoverColor,
  onClick,
}: OAuthButtonProps) {
  const isDark = bgColor !== "white" && bgColor !== "#FFFFFF";

  return (
    <Button
      variant={isDark ? "default" : "outline"}
      size="icon"
      onClick={onClick}
      className={`w-12 h-12 rounded-full p-0 flex items-center justify-center transition-colors
        ${isDark ? "" : "border border-gray-200"}
        ${bgColor ? `bg-[${bgColor}]` : ""}
        ${
          hoverColor
            ? `hover:bg-[${hoverColor}]`
            : isDark
            ? ""
            : "hover:bg-gray-100"
        }`}
    >
      <Image
        src={icon}
        alt={`${provider} login`}
        width={24}
        height={24}
        className="object-contain"
      />
    </Button>
  );
}
