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
                <div style={{display: "flex", flexDirection: "column", alignSelf: "center", padding: "20px"}} key={i.id}>
                    <Typography variant={"subtitle1"}>{"Picture #" + i.id}</Typography>
                    <img style={{height: "700px", width:"500px",alignSelf: "center"}} src={i.src}/>
                    <div style={{display: "flex", flexDirection: "row", padding: "10px" ,alignSelf: "center"}}>
                        <Typography>{i.value + "$"}</Typography>
                        {isAddButtonEnable(i) ? <Button onClick={() => user?.cart.push(i)}>Add to cart</Button> : null}
                    </div>

                </div>
            ))}
        </div>
    );
};