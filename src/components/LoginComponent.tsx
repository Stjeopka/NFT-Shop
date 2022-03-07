// @flow
import * as React from 'react';
import {Button, TextField} from "@mui/material";
import {useUser} from "../Models/useUser";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const LoginComponent = () => {
    const navigate = useNavigate();
    const [user, loginFunc] = useUser(() => {
        navigate("/home");
    });
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = () => {
        loginFunc(userName);
    }
    return (
        <div>
            <TextField onChange={(e) => setUserName(e.target.value)} value={userName}/>
            <TextField type={"password"} onChange={(e) => setPassword(e.target.value)} value={password}/>
            <Button onClick={loginUser}>Login</Button>
        </div>
    );
};