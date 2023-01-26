import React from "react";
import Logo from "./Logo";
import ProfileDropdown from "../dropdown/ProfileDropdown";
import SearchBox from "../form/SearchBox";
import NavbarItems from "./NavbarItems";
function Navbar() {
  return (
    <>
      <div className="apply-bg apply-border flex items-center justify-between border-b  p-2 ">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex flex-[2_2_0%] items-center justify-between">
          <SearchBox />
          <div className="ml-auto mr-4">
            <NavbarItems />
          </div>
          <ProfileDropdown />
        </div>
        {/* <div className="flex flex-col"></div> */}
      </div>
    </>
  );
}

export default Navbar;
