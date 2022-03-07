// @flow
import * as React from 'react';
import {FC} from "react";
import {MainMenu} from "./MainMenu";
import "../styles/NavBarComponent.scss"
import {Avatar, Button, Tooltip, Typography} from "@mui/material";
import {useRecoilState, useRecoilValue} from "recoil";
import {userAtom, userBalanceSelector} from "../Models/recoil-states";
import {useNavigate} from "react-router-dom";

interface Props {
    logoUrl: string;
    title: string;
};

export const NavBarComponent: FC<Props> = (props) => {
    const [user] = useRecoilState(userAtom);
    const nav=useNavigate();
    const totalBalance = useRecoilValue(userBalanceSelector)
    return (
        <div className="container main-container">
            <div className={"container center-container"}>
                <Tooltip title={props.title}>
                    <img className="logo" src={props.logoUrl} alt="nft trading logo"/>
                </Tooltip>
                <MainMenu/>
            </div>
            {user ? (<div className={"container center-container"}>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <Button variant={"contained"} onClick={()=>nav("/cart")}>
                        Cart
                    </Button>
                    <Typography> Total Balance: {totalBalance}€</Typography>
                </div>
                <div className={"space"}>
                    <Typography variant={"subtitle1"}><b>{user?.UserName ?? ""}</b></Typography>
                </div>
                <Avatar className={"space"} alt={user?.UserName ?? ""} src={user?.avatarSrc ?? ""}/>
            </div>) : (<div></div>)}
        </div>
    );
};