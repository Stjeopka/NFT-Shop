// @flow
import * as React from 'react';
import {FC, useState} from "react";
import {MainMenu} from "./MainMenu";
import "../styles/NavBarComponent.scss"
import {Avatar, Button, Tooltip, Typography} from "@mui/material";
import {User} from "../Models/User";

interface Props {
    logoUrl: string;
    title: string;
    loggedInUser: User;
};

export const NavBarComponent: FC<Props> = (props) => {
    const [totalBalance, setTotalBalance] = useState(0.0);
    return (
        <div className="container main-container">
            <div className={"container center-container"}>
                <Tooltip title={props.title}>
                    <img className="logo" src={props.logoUrl} alt="nft trading logo"/>
                </Tooltip>
                <MainMenu/>
            </div>
            <div className={"container center-container"}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Button variant={"contained"}>
                        Cart
                    </Button>
                    <Typography> Total Balance: {totalBalance}€</Typography>
                </div>
                <div className={"space"}>
                    <Typography variant={"subtitle1"}><b>{props.loggedInUser.UserName}</b></Typography>
                </div>
                <Avatar className={"space"} alt={props.loggedInUser.UserName} src={props.loggedInUser.avatarSrc}/>
            </div>
        </div>
    );
};