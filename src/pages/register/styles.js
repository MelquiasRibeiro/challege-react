import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 32px;
`;
export const RegisterContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 530px;
  border-radius: 12px;
  padding: 16px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  > h1 {
    color: #191920;
    text-align: center;
  }
  > img {
    height: 300px;
    width: 200px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  > p {
    display: flex;
    align-items: center;
    margin: 16px 0 8px 0;
    color: #191920;
    font-size: 16px;
    font-weight: bold;
    align-self: center;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  > p {
    display: flex;
    align-items: center;
    margin: 16px 0 0px 0;
    color: #191920;
    font-size: 14px;
  }
`;
export const Input = styled.input`
  height: 50px;
  border-radius: 24px;
  padding: 8px 24px;
  color: #191920;
  font-weight: bold;
  border: solid 1px #191920;
  margin-top: 16px;
  font-size: 16px;
`;
export const Button = styled.button`
  border-radius: 24px;
  font-weight: bold;
  height: 50px;
  width: 90%;
  border-style: none;
  background-color: #191920;
  margin-top: 32px;
`;

export const LinkBack = styled(Link)`
  text-decoration: none;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;
