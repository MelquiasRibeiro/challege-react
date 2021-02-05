import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 32px;
`;
export const LoginContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 450px;
  border-radius: 12px;
  padding: 16px;
  > h1 {
    color: #191920;
    margin-bottom: 16px;
  }
  > p {
    display: flex;
    align-items: center;
    margin-top: 32px;
    color: #191920;
    font-size: 16px;
    font-weight: bold;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 32px;
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
`;
