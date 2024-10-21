import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-800">
      <ul className="flex justify-center gap-10 p-4 text-lg">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Contact">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
