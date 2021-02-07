import styled, { keyframes, css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 32px;
  width: 90%;
  background-color:#ffffff;
  padding: 16px;
  flex-direction: column;
  border-radius: 12px;

  > h1 {
    margin-bottom: 32px;
    color: #191920;
  }
  >a{
    align-self:flex-start;
    margin-left:16px;
    transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  }

`;
export const Content = styled.form`
  display:flex;
  flex:1;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content:space-between;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex:1;
  flex-direction:column;
  align-items:center;
  margin:0 40px 0 0;
  > img {
    width: 108px;
    height: 108px;
    border:solid 1px #191920;
    padding:8px;
    border-radius:12px;
  }
  > p {
    display: flex;
    align-self:flex-start ;
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

export const InfoContainer = styled.div`
  flex:1;
  margin:0 0 0 40px;
> p {
    display: flex;
    align-items: center;
    margin: 16px 0 0px 0;
    color: #191920;
    font-size: 14px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg)
  }
`;
export const Button = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  display:flex;
  align-items:center;
  justify-content:center;
  justify-self:center;
  border-radius: 24px;
  font-weight: bold;
  height: 50px;
  width: 100%;
  align-self:flex-end;
  justify-self:center;
  border-style: none;
  background-color: #191920;
  margin-top: 32px;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s infinite;
      }
    `}
`;
