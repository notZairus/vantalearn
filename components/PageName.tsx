import { usePathname } from "next/navigation";
import React from "react";

const PageName = ({ ...props }) => {
  const name = usePathname().replace("/", "");

  return (
    <div {...props}>
      {name.length > 2 && (
        <h1>
          {name[0].toUpperCase()}
          {name.slice(1, name.length)}
        </h1>
      )}
    </div>
  );
};

export default PageName;
