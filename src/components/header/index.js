import React from "react";
import { Link } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import Logo from "../../assets/images/Mateus.png";
import { Container, Cart } from "./styles";

export default function Header() {
  return (
    <Container>
      <Link to="/dashboard">
        <img src={Logo} alt="logo" />
      </Link>
      <Cart to="/">
        <div>
          <strong>Sair</strong>
        </div>
        <BiLogOut size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
