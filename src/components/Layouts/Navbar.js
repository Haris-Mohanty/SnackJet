import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="text-white-100 sticky top-0 z-50 ">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-extrabold items-center uppercase"
        >
          <p>SnackJet</p>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
