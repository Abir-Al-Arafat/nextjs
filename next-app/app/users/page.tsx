import Link from "next/link";
import React from "react";
import UserTable from "./UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UsersPage = async ({ searchParams: { sortOrder } }: Props) => {
  console.log("sortOrder", sortOrder);
  return (
    <>
      <Link className="btn btn-primary" href="/">
        Back
      </Link>
      <h1>Users </h1> <UserTable sortOrder={sortOrder} />
    </>
  );
};

export default UsersPage;
