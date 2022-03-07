// @flow
import * as React from 'react';
import {useState} from "react";
import {NftItem} from "../Models/User";
import {Button, Typography} from "@mui/material";
import {useRecoilState} from "recoil";
import {userAtom} from "../Models/recoil-states";

interface Props {

};
export const CartComponent = (props: Props) => {
    const [user] = useRecoilState(userAtom);

    return user ? (
        <div>
            {user.cart.map(item => (
                <div>
                    <Typography variant={"subtitle1"}>{item.description}</Typography>
                    {item.src ? <img src={item.src}/> : null}
                    <Typography>{item.value}</Typography>
                    <Button onClick={() => user.cart = user.cart.filter(i => i.id != item.id)}>Entfernen</Button>
                </div>
            ))}
        </div>
    ) : (
        <div>
            Bitte Einloggen
        </div>
    );
};