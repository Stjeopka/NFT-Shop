// @flow
import * as React from 'react';
import "../styles/Login.scss"
import {Button, Card, CardActions, CardContent, CardHeader, Grid, TextField, Typography} from "@mui/material";
import {userAtom} from "../Models/recoil-states";
import {FormEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";

export const LoginComponent = () => {
    const navigate = useNavigate();

    const setUser = useSetRecoilState(userAtom);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const loginUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUser({
            UserName: userName,
            avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5spYMNieWX-f77dDLGoPujAm2Ra7xcjypXw&usqp=CAU",
        });
        navigate("/");
    }
    return (
        <div style={{margin:"1% 30%"}}>
        <form onSubmit={loginUser}>
        <Card>
            <CardHeader title={"Login"}/>
            <CardContent>
                <Grid container spacing={2} direction="column" justifyContent="center"
                      alignItems="center">
                    <Grid item>
                        <TextField label={"Benutzer name"} onChange={(e) => setUserName(e.target.value)}
                                   value={userName}/>
                    </Grid>
                    <Grid item>
                        <TextField label={"Passowrd"} type={"password"} onChange={(e) => setPassword(e.target.value)}
                                   value={password}/>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Grid container direction="column" justifyContent="center"
                      alignItems="center">
                    <Button type="submit" variant={"contained"}>Login</Button>
                </Grid>
            </CardActions>
        </Card>
        </form>
        </div>

    );
};
