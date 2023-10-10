import { Box, useMediaQuey } from "@mui/material";
import { useEffect, useState } from "react";
import { UseSelector, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "scenes/navbar";
import FriendListWidget from "../../scenes/widgets/FriendListWidget";
import MyPostWidget from "../../scenes/widgets/MyPostWidget";
import PostsWidget from "../../scenes/widgets/PostsWidget";
import UserWidget from "../../scenes/widgets/UserWidget";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuey("(min-width: 1000px)");

  return <div>profilepage</div>;
};

export default ProfilePage;
