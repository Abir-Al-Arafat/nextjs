import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex bg-slate-200 gap-2 p-3">
      <Link href="/">Home</Link>
      <Link href="/users">Users</Link>
    </div>
  );
};

export default NavBar;
