import styled from "styled-components";
/////////////////////////////////////////////////////////////////////

export const SearchBox = styled.form`
  height: 40px;
  width: 500px;
  border-radius: 40px;
  background: white;
  border: 1px solid black;
`;

export const SearchTxt = styled.input`
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0px;
  margin-top: 4px;
  margin-left: 15px;
  font-size: 16px;
  line-height: 30px;
  width: 420px;
`;

export const SearchButton = styled.button`
  float: right;
  width: 40px;
  height: 100%;
  border-radius: 50%;
  background: white;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
