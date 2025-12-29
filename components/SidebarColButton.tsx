"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@base-ui/react";
import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarColButton = ({ title, icon, links }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const path = usePathname();

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-full flex-col"
    >
      <CollapsibleTrigger asChild>
        <Button
          className={`py-3 cursor-pointer bg-sidebar w-full flex items-center justify-between gap-4 px-8 
            ${isOpen ? "bg-sidebar-foreground/2" : ""}
            transition-all duration-30`}
        >
          <div className="flex gap-2 flex-1">
            <HugeiconsIcon icon={icon} size={20} />
            {title}
          </div>
          <div>
            <HugeiconsIcon
              className={`transition-all duration-300 ${
                isOpen ? "rotate-90" : ""
              }`}
              icon={ArrowRight01Icon}
              size={20}
            />
          </div>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="">
        {links.map((link: { title: string; href: string }) => (
          <Link
            key={link.title}
            href={link.href}
            className="w-full cursor-pointer"
          >
            <Button
              className={`py-2 text-sm border-y-[0.5px] cursor-pointer bg-sidebar w-full flex items-center gap-4 px-8 transition-all duration-300 ${
                path.startsWith(link.href)
                  ? "border-l-8 border-white bg-foreground/10"
                  : ""
              }`}
            >
              {link.title}
            </Button>
          </Link>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default SidebarColButton;
