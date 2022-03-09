// @flow
import * as React from 'react';
import "../styles/Cart.scss"
import {Button, Typography} from "@mui/material";
import {useRecoilState, useRecoilValue} from "recoil";
import {shoppingCartAtom, userAtom} from "../Models/recoil-states";
import {useNavigate} from "react-router-dom";

export const CartComponent = () => {
    const nav=useNavigate();
    const [user] = useRecoilState(userAtom);
    const [cart, setCart] = useRecoilState(shoppingCartAtom);
    const isBuyDisabled = (): boolean => {
        return cart.length == 0;
    }
    return (
        <div>
            {cart.map(item => (
                <div>
                    <Typography variant={"subtitle1"}>{item.description}</Typography>
                    {item.src ? <img src={item.src}/> : null}
                    <Typography>{item.value}</Typography>
                    <Button onClick={() => setCart(cart.filter(i => i.id != item.id))}>Entfernen</Button>
                </div>
            ))}
            {user ? <Button disabled={isBuyDisabled()} onClick={()=>nav("/checkout")}>Kaufen</Button> : (
                <div>
                    Bitte Einloggen
                </div>
            )}
        </div>
    );
};
