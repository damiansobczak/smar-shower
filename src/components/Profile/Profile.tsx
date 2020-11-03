import React from "react";
import "./Profile.scss";
import Image from "../../assets/images/profile.jpg";

export default function Profile() {
  return <img src={Image} alt="User profile" className="profile" />;
}
