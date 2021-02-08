import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import { FaSignInAlt } from "react-icons/fa";
import notify from "../../utils/notify";
import {
  Wrapper,
  LoginContainer,
  InputContainer,
  Input,
  Button,
  LinkBack,
} from "./styles";
import {GlobalContext} from "../../providers/globalState"

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { users} = useContext(GlobalContext);




  function Handlelogin(e) {
    e.preventDefault();
    setLoading(true);
      const hasUser = users.find((r) => r.email === email);
      if (hasUser&&hasUser.email === email && hasUser.password === password) {
        console.log("logado");
        setLoading(false);
        history.push('/dashboard');
      }else{
        notify('Credenciais inválidas, tente novamente','error')
        setError(true)
        setLoading(false);
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
            error={error}
          />
          <Input
            type="password"
            placeholder="Digite seu password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={error}
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
