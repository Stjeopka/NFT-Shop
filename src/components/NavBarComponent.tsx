// @flow
import * as React from 'react';
import {FC, useEffect, useState} from "react";
import {MainMenu} from "./MainMenu";
import "../styles/NavBarComponent.scss"
import {Avatar, Button, Tooltip, Typography} from "@mui/material";
import {User} from "../Models/User";
import {useUser} from "../Models/useUser";

interface Props {
    logoUrl: string;
    title: string;
};

export const NavBarComponent: FC<Props> = (props) => {
    const [totalBalance, setTotalBalance] = useState(0.0);

    const [user] = useUser(() => {
        let sum = 0.0;
        if (user)
            user.cart.forEach(i => sum += i.value);
        setTotalBalance(sum);
    });

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
                    <Typography variant={"subtitle1"}><b>{user?.UserName ?? ""}</b></Typography>
                </div>
                <Avatar className={"space"} alt={user?.UserName ?? ""} src={user?.avatarSrc ?? ""}/>
            </div>
        </div>
    );
};