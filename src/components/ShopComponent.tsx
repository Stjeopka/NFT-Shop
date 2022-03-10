// @flow
import * as React from 'react';
import "../styles/Shop.scss"
import {shoppingCartAtom} from "../Models/recoil-states";
import {NftItem} from "../Models/User";
import {useEffect, useState} from "react";
import {Button, Typography} from "@mui/material";
import {useRecoilState} from "recoil";

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
               <div className="itembox"  key={i.id}>
                    <Typography className="headline" variant={"subtitle1"}>{"Picture #" + i.id}</Typography>
                    <img className="pic"  src={i.src}/>
                    <div className="textbox">
                        <Typography className="textbox">{i.value + "$"}</Typography>
                        {isAddButtonEnable(i) ? <Button onClick={() => user?.cart.push(i)}>Add to cart</Button> : null}
                    </div>

                </div>
            ))}
        </div>
    );
};
