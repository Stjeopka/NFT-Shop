// @flow
import * as React from 'react';
import {Button, TextField} from "@mui/material";
import {userAtom} from "../Models/recoil-states";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import { useSetRecoilState} from "recoil";

export const LoginComponent = () => {
    const navigate = useNavigate();

    const  setUser = useSetRecoilState(userAtom);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = () => {
        setUser({
            cart: [],
            UserName: userName,
            avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5spYMNieWX-f77dDLGoPujAm2Ra7xcjypXw&usqp=CAU",
        });
        navigate("/");
    }
    return (
        <div>
            <TextField onChange={(e) => setUserName(e.target.value)} value={userName}/>
            <TextField type={"password"} onChange={(e) => setPassword(e.target.value)} value={password}/>
            <Button onClick={loginUser}>Login</Button>
        </div>
    );
};