// @flow
import * as React from 'react';
import {useUser} from "../Models/useUser";
import {NftItem} from "../Models/User";
import {useEffect, useState} from "react";
import {Button, Typography} from "@mui/material";

interface Props {
    allItems: NftItem[];
};
export const ShopComponent = (props: Props) => {
    const [user, , dispatch] = useUser();
    const [enableAdd, setEnableAdd] = useState(false);
    useEffect(() => {
        setEnableAdd(!!user)
    }, [user]);
    return (
        <div>
            {props.allItems.map(i => (
                <div key={i.id}>
                    <Typography variant={"subtitle1"}>{i.description}</Typography>
                    {i.src ? <img src={i.src}/> : null}
                    <Typography>{i.value}</Typography>
                    {enableAdd ? <Button onClick={() => dispatch("addCart", i)}>Hinzufügen</Button> : null}

                </div>
            ))}
        </div>
    );
};