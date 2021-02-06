import React,{useState,useEffect} from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
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
  const [users, setUsers] = useState([]);

  function handleDelete(user){
    setUsers(users.filter(u=> u !== user))
    const data=[...users]
    localStorage.setItem("users", JSON.stringify(data))
  }

  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);

    return (
        <>
            <Header />
            <Wrapper>
                <h1>Lista de Usuários</h1>
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
                                      <AiFillEdit size={32}color="#000" />
                                  </button>
                                  <button type="button" onClick={()=>handleDelete(user)}>
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
