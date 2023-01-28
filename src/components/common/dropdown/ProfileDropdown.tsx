import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import DropdownBtn from "./DropdownBtn";
import {
  IconChevronDown,
  IconEye,
  IconFlower,
  IconLogout,
  IconUserCircle,
  TablerIcon,
} from "@tabler/icons";
import DefaultAvatar from "../navbar/DefaultAvatar";
import SwitchBtn from "../button/Switch";
import DropdownItem from "./DropdownItem";
import Link from "next/link";
import { useThemeStore } from "@/src/stores/useThemeStore";
import { signOut, useSession } from "next-auth/react";

function ProfileDropdown() {
  const { data: session } = useSession();
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

  return (
    <Menu as={"div"} className="relative">
      <Menu.Button>
        <DropdownBtn className="gap-2">
          <DefaultAvatar isOnline={true} />
          <div className="mr-6 hidden flex-col md:flex">
            <h4 className="heading-text">{session?.user?.name}</h4>
            <div className="flex items-center">
              <IconFlower className="icon h-3 w-3 text-primary-700 dark:text-primary-600" />
              <span className="heading-text text-gray-700 dark:text-gray-400">
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
          <DropdownTitle title="My Stuff">
            <IconUserCircle className="icon h-6 w-6 text-gray-500" />
          </DropdownTitle>
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
            <DropdownTitle title="View Options">
              <IconEye className="icon h-6 w-6 text-gray-400" />
            </DropdownTitle>
            <Menu.Item>
              {({ active }) => (
                <DropdownItem
                  isActive={active}
                  onClick={() =>
                    currentTheme === "dark"
                      ? setTheme("light")
                      : setTheme("dark")
                  }
                >
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
          <hr />
          <Menu.Item>
            {({ active }) => (
              <DropdownItem
                isActive={active}
                onClick={() => void signOut()}
                className="gap-1 pl-4"
              >
                <IconLogout className="icon" />
                <h4 className="text-sm font-medium">Sign out</h4>
              </DropdownItem>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
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
      <h5 className="text-sm font-medium text-gray-500">{title}</h5>
    </div>
  );
}
export default ProfileDropdown;
