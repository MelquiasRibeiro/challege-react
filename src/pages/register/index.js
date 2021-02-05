import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { FaArrowLeft, FaSpinner } from "react-icons/fa";
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
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  function confirmPaword() {
    if (password !== passwordConfirmation) {
      setError("as senhas não correspondem");
    }
    console.log(error);
  }

  useEffect(() => {
    confirmPaword();
  }, [passwordConfirmation, password]);

  function handleRegister(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const hasUser = users.find((r) => r.email === email);
      if (hasUser) throw new Error("Este usuário já está cadastrado");
      const newUser = {
        picture: null,
        name,
        email,
        phone,
        password,
      };
      setUsers([...users, newUser]);
    } catch (err) {
      setError(err);
      console.log(err);
      setLoading(false);
    }
    setLoading(false);
    localStorage.setItem("users", JSON.stringify(users));
    history.push('/login');
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
            <Input
              type="password"
              placeholder="Confirme sua senha"
              required
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </InputContainer>
          <Button loading={loading}>
            {loading ? <FaSpinner color="#fff" size={14} /> : "CADASTRAR"}
          </Button>
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
