"use client";

import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import { Button } from "@base-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavButton = ({
  title,
  icon,
  href,
}: {
  title: string;
  icon: IconSvgElement;
  href: string;
}) => {
  const path = usePathname();

  return (
    <Link href={href} className="w-full cursor-pointer">
      <Button
        className={`py-3 cursor-pointer bg-sidebar w-full flex items-center gap-4 px-8 transition-all duration-300 ${
          path.startsWith(href)
            ? "border-l-8 border-white bg-foreground/10"
            : ""
        }`}
      >
        <HugeiconsIcon icon={icon} size={20} />
        {title}
      </Button>
    </Link>
  );
};

export default NavButton;
