import React from "react";
import styled from "styled-components";

export default function UserInfo() {
  return (
    <Container>
      <Image />
      <br />
      <UserId>seobbang</UserId>
      <UserName>SeoHyunKIM</UserName>
      <VisitBt>visit SeoHyunKIm</VisitBt>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  flex-wrap: wrap;

  position: relative;
  top: 100px;

  background-color: #000000;
  opacity: 30%;
  font-size: 32px;
  font-weight: bold;

  width: 600px;
  height: 430px;
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

const UserId = styled.h2`
  color: white;
  font-size: 25px;
  margin: 5px 0;
`;

const UserName = styled.h3`
  color: white;
  font-size: 25px;
  margin: 7px 0;
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
