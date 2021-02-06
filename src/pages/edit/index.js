import React,{useState,useEffect} from "react";
import {
    Wrapper,
} from "./styles";
import Header from "../../components/header";
// import UserPic from "../../assets/images/user.svg";

export default function Edit() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
      setUsers(JSON.parse(savedUsers));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])


    return (
        <>
            <Header />
            <Wrapper>
                <h1>Lista de Usuários</h1>
            </Wrapper>
        </>
    );
}
