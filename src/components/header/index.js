import React,{useContext} from "react";
import { useHistory,Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import Logo from "../../assets/images/Mateus.png";
import { Container, Logout } from "./styles";
import {GlobalContext} from "../../providers/globalState"

export default function Header() {
  const history = useHistory();

  const { logout } = useContext(GlobalContext);


  function handleLogOut(){
    logout()
    history.push('/')
  }

  return (
    <Container>
      <Link to="/dashboard">
        <img src={Logo} alt="logo" />
      </Link>
      <Logout onClick={()=>handleLogOut()}>
        <div>
          <strong>Sair</strong>
        </div>
        <BiLogOut size={36} color="#fff" />
      </Logout>
    </Container>
  );
}
