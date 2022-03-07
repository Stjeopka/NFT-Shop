// @flow
import * as React from 'react';
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
                <div key={i.id}>
                    <Typography variant={"subtitle1"}>{i.description}</Typography>
                    {i.src ? <img src={i.src}/> : null}
                    <Typography>{i.value}</Typography>
                    {isAddButtonEnable(i) ? <Button onClick={() => user?.cart.push(i)}>Hinzufügen</Button> : null}

                </div>
            ))}
        </div>
    );
};