import React from "react";
import Logo from "./Logo";
import ProfileDropdown from "../dropdown/ProfileDropdown";
import SearchBox from "../form/SearchBox";
import NavbarItems from "./NavbarItems";
import { signIn, useSession } from "next-auth/react";
import Button from "../button/Button";
import { Icon123 } from "@tabler/icons";
function Navbar() {
  const { data: session } = useSession();

  return (
    <>
      <div className="apply-bg apply-border flex items-center justify-between border-b  p-2 ">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex flex-[2_2_0%] items-center justify-between">
          <SearchBox placeholder="Search Reddit" placement={"navbar"} />
          <div className="ml-auto mr-4">
            <NavbarItems />
          </div>
          {session ? (
            <ProfileDropdown />
          ) : (
            <Button
              intent={"secondary"}
              // variant="ghost"
              onClick={() => void signIn("google")}
            >
              <p>Login</p>
            </Button>
          )}
        </div>
        {/* <div className="flex flex-col"></div> */}
      </div>
    </>
  );
}

export default Navbar;
