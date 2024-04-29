import React from "react";

interface Props {
  params: { id: number };
}

const UserDetailPage = ({ params: { id } }: Props) => {
  return (
    <div>
      <p>UserID: {id}</p>
    </div>
  );
};

export default UserDetailPage;
