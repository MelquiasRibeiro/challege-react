import React,{useContext} from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import {GlobalContext} from "../../providers/globalState"
import {
    Wrapper,
    ListContainer,
    ListItem,
    IconsContainer,
    RigthSideContainer,
} from "./styles";
import Header from "../../components/header";
import UserPic from "../../assets/images/user.svg";

export default function Dashboard() {
  const { users, removeUser } = useContext(GlobalContext);

  return (
        <>
            <Header />
            <Wrapper>
                <h1>Lista de Usuários</h1>
                <button type="button">
                  <Link to="/create">
                    CRIAR  USUÁRIO
                  </Link>
                </button>
                <ListContainer>
                    {users.map((user) => (
                        <ListItem key={user.name}>
                            <img src={user.picture===null? UserPic:user.picture} alt="user.name" />
                            <RigthSideContainer>
                                <div>
                                    <strong>{user.name}</strong>
                                    <p>{user.email}</p>
                                    <p>{user.phone } </p>
                                </div>
                                <IconsContainer>
                                  <button type="button"  >
                                    <Link to={`/edit/${user.email}`}>
                                      <AiFillEdit size={32}color="#FFBD3D" />
                                    </Link>
                                  </button>
                                  <button type="button" onClick={() => removeUser(user.email)}>
                                      <MdDelete color="#F63E37" size={32} />
                                  </button>
                                </IconsContainer>
                            </RigthSideContainer>
                        </ListItem>
                    ))}
                </ListContainer>
            </Wrapper>
        </>
    );
}
