import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SearchBox() {
  const navigate = useNavigate();

  const handleOnKeyPress = (e) => {
    if (e.key == "Enter") {
      const userId = e.target.value;
      navigate(`/search/${userId}`);
    }
  };

  return (
    <Container>
      <Title>Github Profile Finder</Title>
      <SearchBar
        placeholder="Github username..."
        onKeyPress={handleOnKeyPress}
      ></SearchBar>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  justify-content: center;
  flex-wrap: wrap;

  position: relative;
  top: 50px;

  background-color: #000000;
  opacity: 30%;
  font-size: 32px;
  font-weight: bold;

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
