import Spacer from "./Spacer";
import {
  DashboardSquare02Icon,
  Blockchain06Icon,
} from "@hugeicons/core-free-icons";
import NavButton from "./NavButton";
import SidebarProfile from "./SidebarProfile";

const navs = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: DashboardSquare02Icon,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: Blockchain06Icon,
  },
];

const Sidebar = ({ open }: { open: boolean }) => {
  return (
    <>
      <div
        className={`transition-all duration-500 ${
          open ? "w-60" : "w-0 border-none"
        }`}
      >
        <div
          className={`h-full fixed bg-sidebar/80 border-r border-sidebar-border overflow-hidden ${
            open ? "w-60" : "w-0 border-none"
          } transition-all duration-500`}
        >
          <div className="h-full flex flex-col justify-between">
            <div>
              <div className="w-full py-5 flex items-center gap-2 px-8 border-b-2 border-sidebar-boder">
                <div className="aspect-square h-8 rounded-full bg-white/50"></div>
                <p className="font-semibold text-xl">VantaLearn</p>
              </div>

              <Spacer height={4} />

              <nav className="w-full min-h-20 flex flex-col items-start">
                {navs.map((nav) => (
                  <NavButton
                    key={nav.title}
                    href={nav.href}
                    icon={nav.icon}
                    title={nav.title}
                  />
                ))}
              </nav>
            </div>

            <SidebarProfile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
