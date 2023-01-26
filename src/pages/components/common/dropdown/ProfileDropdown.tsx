import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import DropdownBtn from "./DropdownBtn";
import {
  IconChevronDown,
  IconEye,
  IconFlower,
  IconUserCircle,
} from "@tabler/icons";
import Avatar from "../navbar/Avatar";
import SwitchBtn from "../button/Switch";
import DropdownItem from "./DropdownItem";
import Link from "next/link";
import { useThemeStore } from "@/src/stores/useThemeStore";

function ProfileDropdown() {
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

  console.log(currentTheme, themeSwitchEnabled);
  return (
    <Menu as={"div"} className="relative">
      <Menu.Button>
        <DropdownBtn className="gap-2">
          <Avatar isOnline={true} />
          <div className="mr-12 hidden flex-col md:flex">
            <h4 className="text-xs font-medium dark:text-gray-300">
              Jung_Bikrant
            </h4>
            <div className="flex items-center">
              <IconFlower className="icon h-3 w-3 text-primary-700 dark:text-primary-600" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-400">
                {1} karma
              </span>
            </div>
          </div>
          <div className="ml-auto">
            <IconChevronDown className="icon" />
          </div>
        </DropdownBtn>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-3 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex items-center gap-2 px-3 py-2">
            <IconUserCircle className="icon h-6 w-6" />
            <h5 className="text-sm font-medium text-gray-600">My Stuff</h5>
          </div>
          <div className="">
            <Menu.Item>
              {({ active }) => (
                <DropdownItem isActive={active}>
                  <h4 className="text-sm font-medium">Online Status</h4>
                  <SwitchBtn
                    onChange={() => ({})}
                    srText="Switch online mode"
                    checked={true}
                  />
                </DropdownItem>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/user/Jung_Bikrant">
                  <DropdownItem isActive={active}>
                    <h4 className="text-sm font-medium">Profile</h4>
                  </DropdownItem>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/user/Jung_Bikrant">
                  <DropdownItem isActive={active}>
                    <h4 className="text-sm font-medium">Create Avatar</h4>
                  </DropdownItem>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link href="/user/Jung_Bikrant">
                  <DropdownItem isActive={active}>
                    <h4 className="text-sm font-medium">User Settings</h4>
                  </DropdownItem>
                </Link>
              )}
            </Menu.Item>
            <hr />
            <div className="flex items-center gap-2 px-3 py-2">
              <IconEye className="icon h-6 w-6" />
              <h5 className="text-sm font-medium text-gray-600">
                View Options
              </h5>
            </div>
            <Menu.Item>
              {({ active }) => (
                <DropdownItem isActive={active}>
                  <h4 className="text-sm font-medium">Dark Theme</h4>
                  <SwitchBtn
                    onChange={() =>
                      currentTheme === "dark"
                        ? setTheme("light")
                        : setTheme("dark")
                    }
                    srText="Toggle dark mode"
                    checked={themeSwitchEnabled}
                  />
                </DropdownItem>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default ProfileDropdown;
