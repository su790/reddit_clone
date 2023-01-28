import {
  IconArrowUpRightCircle,
  IconBell,
  IconMessageCircle,
  IconPlus,
  IconSpeakerphone,
} from "@tabler/icons";
import Link from "next/link";
import Button from "../button/Button";
import IconButton from "../button/IconButton";

function NavbarItems() {
  return (
    <div className="flex items-center gap-1">
      <IconButton title="Popular">
        <IconArrowUpRightCircle className="icon h-6 w-6 stroke-[1px]" />
      </IconButton>
      <IconButton title="Chat">
        <IconMessageCircle className="icon h-6 w-6 stroke-[1px]" />
      </IconButton>
      <IconButton title="Notifications">
        <IconBell className="icon h-6 w-6 stroke-[1px]" />
      </IconButton>

      <IconButton title="Create" href="/submit">
        <IconPlus className="icon h-6 w-6 stroke-[1px]" />
      </IconButton>

      <Button intent="primary">
        <IconSpeakerphone className="h-5 w-5" />
        Advertise
      </Button>
    </div>
  );
}

export default NavbarItems;
