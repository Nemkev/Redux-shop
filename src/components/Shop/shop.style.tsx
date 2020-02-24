import styled from 'styled-components';

export const Overlap = styled.div`
  min-height: 100vh;
  background: #81c6b8;
`;

export const OrderZone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  padding: 20px;
`;

export const CreateProductForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ProductList = styled.div``;

export const ListItem = styled.li`
  list-style-type: none;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 10vh;
  background: #169c9e;
  margin-top: 10px;
  &:first-child {
    margin-top: 0px;
  }
`;

export const Input = styled.input`
  margin-top: 10px;
  width: 30vw;
  &:first-child {
    margin-top: 0px;
  }
`;

export const Counter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
