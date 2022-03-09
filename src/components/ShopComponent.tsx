// @flow
import * as React from 'react';
import "../styles/Shop.scss"
import {shoppingCartAtom} from "../Models/recoil-states";
import {NftItem} from "../Models/User";
import {useEffect, useState} from "react";
import {Button, Typography} from "@mui/material";
import {useRecoilState, useRecoilValue} from "recoil";

interface Props {
    allItems: NftItem[];
};
export const ShopComponent = (props: Props) => {
    const [cart, setCart] = useRecoilState(shoppingCartAtom);
    const [enableAdd, setEnableAdd] = useState(false);


    const isAddButtonEnable = (item: NftItem) => {
        return !cart.some(i => i.id == item.id);
    }
    const onButtonClicked = (item: NftItem) => {
        setCart([...cart, item]);
    }
    return (
        <div>
            {props.allItems.map(i => (
                <div key={i.id}>
                    <Typography variant={"subtitle1"}>{i.description}</Typography>
                    {i.src ? <img src={i.src}/> : null}
                    <Typography>{i.value}</Typography>
                    {isAddButtonEnable(i) ? <Button onClick={() => onButtonClicked(i)}>Hinzufügen</Button> : null}
                </div>
            ))}
        </div>
    );
};