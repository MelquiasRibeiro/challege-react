/* eslint-disable react/prop-types */
import React,{useState,useEffect} from "react";
import {  FaSpinner,FaArrowLeft } from "react-icons/fa";
import {Link} from "react-router-dom";
import {
    Wrapper,
    Content,
    ImageContainer,
    Input,
    InfoContainer,
    FormContainer,
    Button

} from "./styles";
import Header from "../../components/header";
import UserPic from "../../assets/images/user.svg";

export default function create() {
  const [users, setUsers] = useState([]);
  const [newEmail, setNewEmail] = useState("");
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newUrlImage, setNewUrlImage] = useState(null);
  const [loading, ] = useState(false);


  useEffect(() => {
    const savedUsers = localStorage.getItem("users");
    if (savedUsers) {
   setUsers(JSON.parse(savedUsers));
    }
}, []);

function HandleCreate(e) {
  e.preventDefault();
  const newUser={
    picture: newUrlImage,
    name: newName,
    email:newEmail,
    phone: newPhone,
    password: newPassword,
  };
  const uptadetedUsers= [...users,newUser];
  localStorage.setItem("users", JSON.stringify(uptadetedUsers));
}

    return (
        <>
            <Header />
            <Wrapper >
              <Link to="/dashboard">
                <FaArrowLeft color="#191920" size={24}/>
              </Link>
                <h1>Crie um novo usuário</h1>
                <Content onSubmit={HandleCreate} >
                      <FormContainer>
                      <ImageContainer>
                        <img src={newUrlImage === null||newUrlImage ===''? UserPic:newUrlImage} alt="user.name" />
                        <p>Url da foto de perfil</p>
                        <Input
                        type="text"
                        placeholder="URL da foto"
                        value={newUrlImage}
                        onChange={(e) => setNewUrlImage(e.target.value)}/>
                      </ImageContainer>
                      <InfoContainer>
                        <p>Nome</p>
                        <Input
                          type="text"
                          placeholder="Digite seu nome"
                          required
                          value={newName}
                          onChange={(e) => setNewName(e.target.value)}
                          />
                        <p>Telefone</p>
                        <Input
                          type="text"
                          placeholder="Digite seu telefone"
                          required
                          value={newPhone}
                          onChange={(e) => setNewPhone(e.target.value)}
                          />
                        <p>Email</p>
                        <Input
                          type="email"
                          placeholder="Digite seu email"
                          required
                          value={newEmail}
                          onChange={(e) => setNewEmail(e.target.value)}
                          />
                        <p>Senha</p>
                        <Input
                          type="password"
                          placeholder="Digite sua senha"
                          required
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                          />
                      </InfoContainer>

                      </FormContainer>

                      <Button loading={loading}>
                        {loading ? <FaSpinner color="#fff" size={14} /> : "SALVAR"}
                      </Button>
                </Content>
            </Wrapper>
        </>
    );
}
