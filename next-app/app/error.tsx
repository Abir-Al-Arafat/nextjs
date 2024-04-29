"use client";
import React from "react";

interface Props {
  error: Error;
  reset: () => void;
}

const error = ({ error, reset }: Props) => {
  console.log("error", error);
  return (
    <>
      <div>Unexpected Error Occured</div>
      {error && (
        <button className="btn" onClick={() => reset()}>
          Retry
        </button>
      )}
    </>
  );
};

export default error;
