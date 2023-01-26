import React from "react";
import Logo from "./Logo";
import ProfileDropdown from "../dropdown/ProfileDropdown";
function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between p-2 ">
        <Logo />
        <ProfileDropdown />
        {/* <div className="flex flex-col"></div> */}
      </div>
    </>
  );
}

export default Navbar;
