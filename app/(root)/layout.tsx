"use client";

import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import SidebarButton from "@/components/SidebarButton";
import PageName from "@/components/PageName";
import Spacer from "@/components/Spacer";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <div className="w-full h-full flex">
        <Sidebar open={open} />
        <section className="flex-1 flex flex-col">
          <div className="pt-4 pl-4">
            <SidebarButton setOpen={() => setOpen(!open)} />
          </div>
          <div className="flex-1 px-24 py-4 pb-12 flex flex-col">
            <PageName />
            <Spacer height={8} />
            <main className="flex-1">{children}</main>
          </div>
        </section>
      </div>
    </>
  );
};

export default DashboardLayout;
