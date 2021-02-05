import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import {
  Wrapper,
  RegisterContainer,
  InfoContainer,
  FormContainer,
  InputContainer,
  Input,
  Button,
  LinkBack,
} from './styles';
import form from '../../assets/images/form.svg';

export default function Register() {
  return (
    <Wrapper>
      <RegisterContainer>
        <InfoContainer>
          <h1>Crie sua conta</h1>
          <img src={form} alt="form" />
        </InfoContainer>
        <FormContainer>
          <InputContainer>
            <p>Dados Pessoais</p>
            <Input />
            <Input />
          </InputContainer>
          <InputContainer>
            <p>Email e senha</p>
            <Input />
            <Input />
            <Input />
          </InputContainer>
          <Button>CADASTRAR</Button>
          <p>
            <LinkBack to="/login">
              <FaArrowLeft /> já tem cadastro?
            </LinkBack>
          </p>
        </FormContainer>
      </RegisterContainer>
    </Wrapper>
  );
}
