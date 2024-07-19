import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
const AboutWrapper = styled.div`
  padding: 5px 20px;
`;

const ProfileName = styled.h2`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
`;

const ProfileCategory = styled.span`
  color: #919191;
  font-size: 15px;
`;

const BioText = styled.span`
  display: block;
  margin-top: 3px;
`;

const BioLink = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  color: #3d83b6;
  margin-top: 3px;
`;

function About() {
  const user = useSelector((state) => state.data.user.user);
  return (
    <AboutWrapper>
      <ProfileName> {user.username} || Creating a life I love ❤️❤️</ProfileName>
      <ProfileCategory>Education</ProfileCategory>
      <BioText>🌐All About FrontEnd Web-Development</BioText>
      <BioText>📒Resources/tips/tricks/tutorials</BioText>
    </AboutWrapper>
  );
}

export default About;
