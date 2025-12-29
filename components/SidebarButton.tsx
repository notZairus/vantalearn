import { HugeiconsIcon } from "@hugeicons/react";
import { Menu04Icon } from "@hugeicons/core-free-icons";

const SidebarButton = ({ setOpen }: { setOpen: () => void }) => {
  return (
    <header>
      <div>
        <button className="cursor-pointer" onClick={setOpen}>
          <HugeiconsIcon icon={Menu04Icon} size={36} />
        </button>
      </div>
    </header>
  );
};

export default SidebarButton;
