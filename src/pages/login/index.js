import React, { useState, useEffect } from "react";
// import { useHistory } from 'react-router-dom';
import { FaSignInAlt } from "react-icons/fa";
import {
  Wrapper,
  LoginContainer,
  InputContainer,
  Input,
  Button,
  LinkBack,
} from "./styles";

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

  function Handlelogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const hasUser = users.find((r) => r.email === email);
      if (hasUser.email === email && hasUser.password === password) {
        console.log("logado");
        setLoading(false);
      }
      console.log("algo errado");
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(true);

    }
  }

  return (
    <Wrapper>
      <LoginContainer onSubmit={Handlelogin}>
        <h1>Faça seu login</h1>
        <InputContainer>
          <Input
            type="email"
            placeholder="Digite seu email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Digite seu password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <Button loading={loading}>ENTRAR</Button>
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
