import React from "react";
import Logo from "./Logo";
import ProfileDropdown from "../dropdown/ProfileDropdown";
function Navbar() {
  return (
    <>
      <div className="apply-bg apply-border flex items-center justify-between border-b  p-2 ">
        <Logo />
        <ProfileDropdown />
        {/* <div className="flex flex-col"></div> */}
      </div>
    </>
  );
}

export default Navbar;
