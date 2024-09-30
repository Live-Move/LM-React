import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2em;
`;

export const OrderProduct = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5em 0;
  }

  th,
  td {
    padding: 10px;
    text-align: center;
  }

  th {
    border-bottom: 2px solid #333;
    text-align: left;
  }

  td {
    border-bottom: 1px solid #ddd;
  }

  img {
    width: 100px;
    height: 100px;
  }
`;

export const PaymentInfo = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 10px;
    text-align: left;
  }

  th {
    border-bottom: 2px solid #333;
  }

  td {
    border-bottom: 1px solid #ddd;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  .user-info,
  .delivery-info {
    width: 48%;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 10px;
    text-align: left;
  }

  th {
    border-bottom: 2px solid #333;
  }

  td {
    border-bottom: 1px solid #ddd;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;

export const PayButton = styled.button`
  padding: 10px 20px;
  background-color: #228be6;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  outline: none;
  font-size: 1rem;

  background-color: #b37840;
  &:hover {
    background: #95775a;
  }

  &:active {
    background: #95775a;
  }
`;
