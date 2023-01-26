import {
  IconArrowUpRightCircle,
  IconBell,
  IconMessageCircle,
  IconPlus,
  IconSpeakerphone,
} from "@tabler/icons";
import Link from "next/link";
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
      <Link href="/submit">
        <IconButton title="Create">
          <IconPlus className="icon h-6 w-6 stroke-[1px]" />
        </IconButton>
      </Link>
      <button
        className="flex items-center gap-2 rounded-full bg-neutral-200 py-2 px-3 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700"
        type="button"
      >
        <IconSpeakerphone className="icon" />
        <span className="heading-text">Advertise</span>
      </button>
    </div>
  );
}

export default NavbarItems;
