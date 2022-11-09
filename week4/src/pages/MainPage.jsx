import React from "react";
import styled from "styled-components";

export default function MainPage() {
  return (
    <Container>
      <SearchBox>
        <Title>Github Profile Finder</Title>
        <SearchBar placeholder="Github username..."></SearchBar>
      </SearchBox>
    </Container>
  );
}

const Container = styled.div`
  background-color: #b4b4ff;
  width: 900px;
  height: 100vh;

  margin: 0 auto;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  position: relative;
  top: 50px;

  background-color: #000000;
  opacity: 30%;

  width: 600px;
  height: 140px;
  border-radius: 25px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #ffffff;
  margin: 0;
  margin-top: 17px;
`;

const SearchBar = styled.input`
  box-sizing: border-box;

  background-color: white;
  font-size: 18px;

  width: 290px;
  height: 40px;
  padding: 10px;
`;
