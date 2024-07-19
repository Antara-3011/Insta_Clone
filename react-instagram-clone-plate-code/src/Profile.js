import React from "react";
import styled from "styled-components";
import TopNav from "./TopNav";

import ProfileDetails from "./ProfileDetails";
import About from "./About";

import Highlights from "./Highlights";
import Tabs from "./Tabs";
import PostGrid from "./PostGrid";

const ProfileWrapper = styled.div`
  background-color: #000;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

function Profile() {
  return (
    <ProfileWrapper>
      <TopNav />

      <ProfileDetails />
      <About />

      <Highlights />
      <Tabs />
      <PostGrid />
    </ProfileWrapper>
  );
}

export default Profile;
