import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import {
  Wrapper,
  LoginContainer,
  InputContainer,
  Input,
  Button,
  LinkBack,
} from './styles';

export default function Login() {
  return (
    <Wrapper>
      <LoginContainer>
        <h1>Faça seu login</h1>
        <InputContainer>
          <Input type="email" />
          <Input type="password" />
        </InputContainer>
        <Button>ENTRAR</Button>
        <p>
          <LinkBack to="/register">
            Cadastre-se aqui
            <FaSignInAlt color="#191920" />
          </LinkBack>
        </p>
      </LoginContainer>
    </Wrapper>
  );
}
