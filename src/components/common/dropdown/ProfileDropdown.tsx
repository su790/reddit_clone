import { useThemeStore } from "@/src/stores/useThemeStore";
import { Popover, Transition } from "@headlessui/react";
import {
  IconChevronDown,
  IconEye,
  IconFlower,
  IconUserCircle,
} from "@tabler/icons-react";
import { type Session } from "next-auth";
import { Fragment, useEffect, useState } from "react";
import SwitchBtn from "../button/Switch";
import SearchBox from "../form/SearchBox";
import DefaultAvatar from "../icons/DefaultAvatar";
import DropdownBtn from "./DropdownBtn";
import DropdownItem from "./DropdownItem";

export default function ProfileDropdown({ userData }: { userData: Session }) {
  const { currentTheme, setTheme } = useThemeStore((state) => state);
  const [themeSwitchEnabled, setThemeSwitchEnabled] = useState(
    currentTheme === "dark"
  );
  useEffect(() => {
    if (currentTheme === "dark") {
      setThemeSwitchEnabled(true);
    } else {
      setThemeSwitchEnabled(false);
    }
  }, [currentTheme]);
  function changeTheme() {
    currentTheme === "dark" ? setTheme("light") : setTheme("dark");
  }
  return (
    <div className=" w-full max-w-sm px-4">
      <Popover className="">
        {({ open }) => (
          <>
            <Popover.Button className={"focusable"}>
              <DropdownBtn className="gap-2">
                <DefaultAvatar isOnline={true} />
                <div className="mr-6 hidden flex-col lg:flex">
                  <h4 className="heading-text w-16 truncate">
                    {userData.user?.name}
                  </h4>
                  <div className="flex items-center">
                    <IconFlower className="icon h-3 w-3 text-primary-700 dark:text-primary-600" />
                    <span className="heading-text text-gray-700 dark:text-gray-400">
                      {1} karma
                    </span>
                  </div>
                </div>
                <div
                  className={`ml-auto ${
                    open ? "rotate-180" : "rotate-0"
                  } transition-transform`}
                >
                  <IconChevronDown className="icon" />
                </div>
              </DropdownBtn>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="apply-bg absolute right-2 mt-3 w-screen origin-top-right overflow-hidden rounded-md py-1 px-[1px] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none focus-visible:border-none  sm:w-56">
                <div className="sm:hidden">
                  <DropdownItem className="pl-11">
                    <SearchBox
                      placeholder="Search Reddit..."
                      placement="navbar"
                    />
                  </DropdownItem>
                </div>
                <div className="flex flex-col gap-1">
                  <DropdownTitle title="My Stuff">
                    <IconUserCircle className="icon h-6 w-6 text-gray-500" />
                  </DropdownTitle>

                  <DropdownItem className="focusable">
                    <h4 className="text-sm font-medium">Online Status</h4>
                    <SwitchBtn
                      onChange={() => ({})}
                      srText="Switch online mode"
                      checked={true}
                    />
                  </DropdownItem>
                  <DropdownItem className="focusable">
                    <h4 className="text-sm font-medium">Profile</h4>
                  </DropdownItem>
                  <DropdownItem className="focusable">
                    <h4 className="text-sm font-medium">Create Avatar</h4>
                  </DropdownItem>
                  <DropdownItem className="focusable">
                    <h4 className="text-sm font-medium">User Settings</h4>
                  </DropdownItem>
                  <hr className="dark:border-gray-600" />
                  <DropdownTitle title="View Options">
                    <IconEye className="icon h-6 w-6 text-gray-400" />
                  </DropdownTitle>
                  <DropdownItem
                    className="focusable"
                    onClick={() => changeTheme()}
                  >
                    <h4 className="text-sm font-medium">Dark Mode</h4>
                    <SwitchBtn
                      onChange={() => changeTheme()}
                      srText="Switch online mode"
                      checked={themeSwitchEnabled}
                    />
                  </DropdownItem>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}
interface DropdownTitleProps {
  title: string;
  children: React.ReactNode;
}
function DropdownTitle({ title, children }: DropdownTitleProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-2">
      {children}
      <h5 className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h5>
    </div>
  );
}
