import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { IUser } from "@/lib/global";
import { getUserByEmail } from "@/actions/user.actions";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HugeiconsIcon } from "@hugeicons/react";
import { MoreIcon } from "@hugeicons/core-free-icons";
import { logout } from "@/actions/auth.actions";

const SidebarProfile = () => {
  const { data } = useSession();
  const [user, setUser] = useState<null | IUser>(null);

  useEffect(() => {
    if (!data) return;

    const getUser = async () => {
      const user = await getUserByEmail(data?.user?.email || "");
      setUser(user);
    };

    getUser();
  }, [data]);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div
      className={`w-full flex items-center justify-between py-4 px-4 border-t-2 border-sidebar-border overflow-hidden transition-all duration-1000 ${
        user ? "mb-0" : "-mb-24"
      }`}
    >
      <div className="flex gap-2 items-center ">
        <div className="overflow-hidden relative aspect-square rounded-full w-10 bg-yellow-400">
          <Image
            src="https://fastly.picsum.photos/id/64/200/300.jpg?hmac=9MtSCC-H4DQRFtYARRhBDmbZhrJlRQJ2NQLowTY7A-s"
            alt="ewan"
            fill
          ></Image>
          {/* TODO make this placeholder image into a proper user photo */}
        </div>
        <p className="text-sm">
          {user?.lastName + ","}
          <br />
          {user?.firstName + " "}
          {user?.middleName ? user?.middleName[0] + "." : ""}
        </p>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <HugeiconsIcon
              icon={MoreIcon}
              size={20}
              className="cursor-pointer"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            {/* TODO User Profile */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SidebarProfile;
