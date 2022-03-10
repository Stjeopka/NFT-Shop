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
    const [anchorEl, setAnchorEl] = React.useState(null);
    const totalBalance = useRecoilValue(userBalanceSelector)
    const LogoClicked = (path: string) => {
        nav(path);
        setAnchorEl(null);
    }
    return (
        <div className="container main-container">
            <div className={"container center-container"}>
                <Tooltip title={props.title}>
                    <img className="logo" src={props.logoUrl} alt="nft trading logo" onClick={()=> LogoClicked("home")}/>
                </Tooltip>
                <MainMenu/>
            </div>
            <h1 className='Titel'>NFT Shop</h1>
            {user ? (<div className={"container center-container"}>

                <div style={{display: "flex", flexDirection: "column"}}>
                    <img className="cart" src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-red-shopping-cart-icon-png-free-illustration-image_1187825.jpg" alt="cart logo" onClick={()=> nav("/cart")}/>
                    <Typography> Total Balance: {totalBalance} $</Typography>
                </div>
                <div className={"space"}>
                    <Typography variant={"subtitle1"}><b>{user?.UserName ?? ""}</b></Typography>
                </div>
                <Avatar className={"space"} alt={user?.UserName ?? ""} src={user?.avatarSrc ?? ""}/>
            </div>) : (<div></div>)}
        </div>
    );
};