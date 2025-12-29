"use client";

import NavButton from "./NavButton";
import {
  DashboardSquare02Icon,
  Brain02Icon,
  Profile02Icon,
} from "@hugeicons/core-free-icons";
import SidebarColButton from "./SidebarColButton";

const navs = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: DashboardSquare02Icon,
  },
];

const collapsibleNavs = [
  {
    title: "Skills",
    icon: Brain02Icon,
    links: [
      {
        title: "analyze",
        href: "/skills/analyze",
      },
      {
        title: "learn",
        href: "/skills/learn",
      },
      {
        title: "recommend",
        href: "/skills/recommend",
      },
      {
        title: "acquired",
        href: "/skills/acquired",
      },
    ],
  },
  {
    title: "Portfolio",
    icon: Profile02Icon,
    links: [
      {
        title: "about",
        href: "/skills/analyze",
      },
      {
        title: "projects",
        href: "/skills/learn",
      },
      {
        title: "contact",
        href: "/skills/recommend",
      },
    ],
  },
];

const SidebarNav = () => {
  return (
    <nav className="w-full min-h-20 flex flex-col items-start">
      {navs.map((nav) => (
        <NavButton
          key={nav.title}
          href={nav.href}
          icon={nav.icon}
          title={nav.title}
        />
      ))}
      {collapsibleNavs.map((nav) => (
        <SidebarColButton
          key={nav.title}
          icon={nav.icon}
          title={nav.title}
          links={nav.links}
        />
      ))}
    </nav>
  );
};

export default SidebarNav;
