// @flow
import * as React from 'react';
import {useEffect, useState} from "react";
import {NftItem} from "../Models/User";
import {Button, Typography} from "@mui/material";
import {useUser} from "../Models/useUser";

interface Props {

};
export const CartComponent = (props: Props) => {
    const [nftItems,setNftItems]=useState<NftItem[]>([]);
    const [user,,dispatch]=useUser(()=>{
        if(user)
        setNftItems(user.cart);
    });

    return (
        <div>
            {nftItems.map(item=>(
                <div>
                    <Typography variant={"subtitle1"}>{item.description}</Typography>
                    {item.src?<img src={item.src}/>:null}
                    <Typography>{item.value}</Typography>
                    <Button onClick={()=>dispatch("removeCart",item)}>Entfernen</Button>
                </div>
            ))}
        </div>
    );
};