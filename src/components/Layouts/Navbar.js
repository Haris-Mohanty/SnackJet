import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
        <Link
          href={"/"}
          className="flex title-font font-extrabold items-center uppercase p-2"
        >
          <Image
            alt="SnackJet"
            src={"/logo.png"}
            width={200}
            height={100}
            className="ml-4 md:ml-6"
          />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/cart"} className="cursor-pointer flex items-center mx-2">
            Cart
          </Link>
          <Link
            href={"/myOrders"}
            className="cursor-pointer flex items-center mx-2"
          >
            My Orders
          </Link>
          <Link href={"/login"} className="cursor-pointer flex items-center mx-2">
            Login
          </Link>
          <Link href={"/register"} className="cursor-pointer flex items-center mx-2">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
