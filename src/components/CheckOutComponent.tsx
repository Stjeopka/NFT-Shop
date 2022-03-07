// @flow
import * as React from 'react';
import {userAtom} from "../Models/recoil-states";
import {Button, TextField, Typography} from "@mui/material";
import {FC, useEffect, useState} from "react";
import {useRecoilState} from "recoil";

export const CheckOutComponent = () => {
    const [user] = useRecoilState(userAtom);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [totalBalance, setTotalBalance] = useState(0.0);
    useEffect(() => {
        if (!user) return;
        let sum = 0.0;
        user.cart.forEach(i => sum + i.value);
        setTotalBalance(sum);
    }, [user]);
    return (
        <div>
            <form method="POST">
                {/*maybe a lable*/}
                <TextField type={"text"} onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                <TextField type={"text"} onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                <TextField type={"email"} onChange={(e) => setEmail(e.target.value)} value={email}/>
                <TextField type={"text"} onChange={(e) => setAddress(e.target.value)} value={address}/>
                <Typography>Summe: {totalBalance}</Typography>
                <Button type={"submit"}>Bezahlen</Button>
            </form>
        </div>
    );
};
