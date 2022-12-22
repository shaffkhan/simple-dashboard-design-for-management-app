import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import search from "./../assets/icons/search.png";
import bell from "./../assets/icons/bell.png";
import shaff from "./../assets/icons/myPic.jpeg";
const Navbar = () => {
  return (
    <div>
      <header className="flex items-center justify-between px-7 py-3 fixed top-0 w-[100%] bg-white z-10">
        <div>
          <RxHamburgerMenu className="h-7 w-7" />
        </div>

        <div className="flex items-center justify-between gap-3 px-5">
          <button>
            <img src={search} alt="my img" />
          </button>

          <button>
            <img src={bell} alt="my img" />
          </button>

          <img
            src={shaff}
            alt=""
            className="rounded-full h-9 w-9 object-cover"
          />
          <h5 className="font-bold">Shaff khan</h5>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
