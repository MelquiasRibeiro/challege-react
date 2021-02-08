import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  flex:1;
  align-items:center;
  >a{
    text-decoration:none;
    color:inherit;
    display:flex;
    align-items:center;
    align-self:flex-start;
    margin-top:32px;
    font-size:16px;
    font-weight:bold;
    >svg{
      margin-right:8px;
    }
  }
  >h1{
    margin:32px;
    @media (max-width: 768px) {
      text-align:center;
      margin:32px 0;
    }
  }
  >img{
    width:70%;
  }
`;
