import React from "react";

interface Props {
  params: { id: number; photoId: number };
}

const UserDetailPage = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      <p>UserID: {id}</p>
      <p>Photo ID: {photoId}</p>
    </div>
  );
};

export default UserDetailPage;
