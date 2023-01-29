import { signIn, useSession } from "next-auth/react";
import Button from "../button/Button";
import PopOver from "../dropdown/ProfileDropdown";
import SearchBox from "../form/SearchBox";
import Logo from "./Logo";
import NavbarItems from "./NavbarItems";
function Navbar() {
  const { data: session } = useSession();
  return (
    <>
      <div className="apply-bg apply-border flex items-center justify-between border-b  p-2 ">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex flex-[3_3_0%] items-center justify-between ">
          <div className="hidden sm:block">
            <SearchBox placeholder="Search Reddit" placement={"navbar"} />
          </div>
          <div className="ml-auto mr-4 hidden lg:block">
            <NavbarItems />
          </div>
          <div className="ml-auto lg:ml-0">
            {session ? (
              <PopOver userData={session} />
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
        </div>
        {/* <div className="flex flex-col"></div> */}
      </div>
    </>
  );
}

export default Navbar;
