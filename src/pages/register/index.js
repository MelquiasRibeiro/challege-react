/* eslint-disable no-unused-expressions */
import React, { useState,useContext} from "react";
import { useHistory } from 'react-router-dom';
import { FaArrowLeft, FaSpinner } from "react-icons/fa";
import {toast} from 'react-toastify'
import {GlobalContext} from "../../providers/globalState"
import {
  Wrapper,
  RegisterContainer,
  InfoContainer,
  FormContainer,
  InputContainer,
  Input,
  Button,
  LinkBack,
} from "./styles";
import form from "../../assets/images/form.svg";



export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { users,addUser} = useContext(GlobalContext);

  function notify(message,type) {
    if(type==='sucess'){
      toast.success(message, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }else{
      toast.error(message, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

  }

  function handleRegister(e) {
    e.preventDefault();
    setLoading(true);

      const hasUser = users.find((r) => r.email === email);
      try {
      if (hasUser){
        notify('Este usuário já está cadastrado','error');
        setLoading(false);
      }else{
        const newUser = {
          picture: null,
          name,
          email,
          phone,
          password,
        };
        notify('Usuário Criado com Sucesso!','sucess')
        addUser(newUser);
        setLoading(false);
        history.push('/');
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Wrapper>
      <RegisterContainer>
        <InfoContainer>
          <h1>Crie sua conta</h1>
          <img src={form} alt="form" />
        </InfoContainer>
        <FormContainer onSubmit={handleRegister}>
          <InputContainer>
            <p>Dados Pessoais</p>
            <Input
              type="text"
              placeholder="Digite seu nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Digite seu telefone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <p>Email e senha</p>
            <Input
              type="email"
              placeholder="Digite seu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Digite sua senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </InputContainer>
          <Button loading={loading}>
            {loading ? <FaSpinner color="#fff" size={14} /> : "CADASTRAR"}
          </Button>
          <p>
            <LinkBack to="/">
              <FaArrowLeft /> já tem cadastro?
            </LinkBack>
          </p>
        </FormContainer>
      </RegisterContainer>
    </Wrapper>
  );
}
