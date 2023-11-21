import React from "react";
import ProfileCard from "./ProfileCard";

function FloatWindow({ functio, data }) {
  return (
    <div className="float_container">
      <ProfileCard data={data} functio={functio} />
    </div>
  );
}

export default FloatWindow;
