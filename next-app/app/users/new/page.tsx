"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

const NewUser = () => {
  const router = useRouter();
  return (
    <div>
      <Link className="btn btn-primary" href="/users">
        Back
      </Link>
      <button
        className="btn ml-2"
        onClick={() => {
          router.push("/users");
        }}
      >
        Create
      </button>
    </div>
  );
};

export default NewUser;
