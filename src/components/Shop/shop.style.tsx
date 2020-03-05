import styled from 'styled-components';

export const Overlap = styled.div`
  min-height: 100vh;
  background: #181818;
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
  justify-content: center;
  align-items: center;
`;

export const ProductList = styled.div``;

export const ListItem = styled.li`
  list-style-type: none;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  border-radius: 3px;
  min-height: 13vh;
  background: #344a5d;
  margin-top: 10px;
  &:first-child {
    margin-top: 0px;
  }
`;

export const TotalPrice = styled.p`
  padding: 3px;
  background: #344a5d;
  border-radius: 3px;
  display: flex;
  min-width: 100px;
  max-width: 120px;
  margin-left: 5px;
`;

export const Input = styled.input`
  margin-top: 10px;
  width: 30vw;
  background: #344a5d;
  color: #e6e6e6;
  border: none;
  height: 32px;
  padding: 4px;
  border-radius: 3px;
  &:first-child {
    margin-top: 0px;
  }
`;

export const ChooseButton = styled.button`
  border-radius: 50%;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  border-radius: 3px;
  margin-bottom: 10px;
  width: 100px;
  background: #344a5d;
  flex-direction: row;
  align-items: center;
  min-height: 40px;
  justify-content: center;
`;

export const CounterValue = styled.p`
  margin-left: 10px;
  margin-right: 10px;
  font-size: 1.3em;
`;

export const Plus = styled.i`
  margin-left: 10px;
  cursor: pointer;
  font-size: 1.3em;
`;

export const Minus = styled.i`
  margin-right: 10px;
  font-size: 1.3em;
  cursor: pointer;
`;

export const AddButton = styled.button`
  border: none;
  width: 100px;
  min-height: 40px;
  border-radius: 3px;
  background: #344a5d;
  color: black;
  cursor: pointer;
`;
