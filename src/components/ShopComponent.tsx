// @flow
import * as React from 'react';
import "../styles/Shop.scss"
import {userAtom} from "../Models/recoil-states";
import {NftItem} from "../Models/User";
import {useEffect, useState} from "react";
import {Button, Typography} from "@mui/material";
import {useRecoilState} from "recoil";


interface Props {
    allItems: NftItem[];
};



export const ShopComponent = (props: Props) => {
    const [user] = useRecoilState(userAtom);
    const [enableAdd, setEnableAdd] = useState(false);
    useEffect(() => {
        setEnableAdd(!!user)
    }, [user]);
    const isAddButtonEnable = (item: NftItem) => {
        return !user?.cart.some(i => item.id == i.id);
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