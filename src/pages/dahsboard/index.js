import React from "react";
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
import User from "../../assets/images/user.svg";

export default function Dashboard() {
    const users = [
        {
            picture: User,
            name: "melquias Rosa Ribeiro",
            email: "melquias10.mr@gmail.com",
            phone: "(98)981877537",
        },
        {
            picture: User,
            name: "melquias Rosa Ribeiro",
            email: "melquias10.mr@gmail.com",
            phone: "(98)981877537",
        },
        {
            picture: User,
            name: "melquias Rosa Ribeiro",
            email: "melquias10.mr@gmail.com",
            phone: "(98)981877537",
        },
    ];

    return (
        <>
            <Header />
            <Wrapper>
                <h1>Lista de Usuários</h1>
                <ListContainer>
                    {users.map((user) => (
                        <ListItem>
                            <img src={user.picture} alt="user.name" />
                            <RigthSideContainer>
                                <div>
                                    <strong>{user.name}</strong>
                                    <p>{user.email}</p>
                                    <p>{user.phone}</p>
                                </div>
                                <IconsContainer>
                                    <MdDelete color="#F63E37" size={32} />
                                    <AiFillEdit size={32} />
                                </IconsContainer>
                            </RigthSideContainer>
                        </ListItem>
                    ))}
                </ListContainer>
            </Wrapper>
        </>
    );
}
