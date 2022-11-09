import React from "react";
import styled from "styled-components";
import AccountInfo from "./AccountInfo";

export default function UserInfo() {
  const userInfos = ["userId", "userName"];
  const accountInfos = ["Followers", "Following", "Repos"];
  const accountInfoList = accountInfos.map((item) => (
    <AccountInfo infoName={item}>{item}</AccountInfo>
  ));

  return (
    <Container>
      <Image />
      <br />
      <User id="userId">seobbang</User>
      <User id="userName">SeoHyunKIM</User>
      <VisitBt alt="~의 의미지">visit SeoHyunKIm</VisitBt>
      <Container2>{accountInfoList}</Container2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  flex-wrap: wrap;

  position: relative;
  top: 70px;

  background-color: #000000;
  opacity: 30%;
  font-size: 32px;
  font-weight: bold;

  width: 600px;
  height: 480px;
  border-radius: 25px;
  margin: 0 auto;
`;

const Image = styled.img`
  position: relative;
  top: 25px;

  background-color: white;
  width: 150px;
  height: 150px;
`;

const User = styled.h2`
  color: white;
  font-size: 25px;
  margin: 5px 0;
`;

const VisitBt = styled.button`
  box-sizing: border-box;

  background: none;
  font-size: 15px;
  color: white;

  border-color: white;
  border-radius: 20px;

  padding: 8px 13px;
  margin: 15px 0;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: black;
  width: 500px;
  height: 120px;
  margin: 10px 0;
`;
