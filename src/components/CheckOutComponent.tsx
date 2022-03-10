// @flow
import * as React from 'react';
import "../styles/CheckOut.scss"
import {userAtom} from "../Models/recoil-states";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {FC, useEffect, useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";

enum Gender {
    male,
    female,
    etc
}

export const CheckOutComponent = () => {
    const [user] = useRecoilState(userAtom);
    const [firstName, setFirstName] = useState("");
    const [gender, setGender] = useState<Gender | undefined>();
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [totalBalance, setTotalBalance] = useState(0.0);
    const [wasBuySuccess, setWasBuySuccess] = useState(false);

    useEffect(() => {
        if (!user) return;
        let sum = 0.0;
        user.cart.forEach(i => sum + i.value);
        setTotalBalance(sum);
    }, [user]);
    const getGenderText = () => {
        switch (gender) {
            case Gender.male:
                return "Herr";
            case Gender.female:
                return "Frau";
            case Gender.etc:
                return "?";
        }
    }
    const genderLabelText = "Geschlecht";
    return wasBuySuccess ? (<div>
        Danke für Ihrne Einkauf {} {lastName}
    </div>) : (
        <div>
            <form method="POST" onSubmit={(e) => {
                e.preventDefault();
                setWasBuySuccess(true);
            }}>
                <FormControl>
                    <InputLabel id="gender-select-label" variant={"standard"}>{genderLabelText}</InputLabel>
                    <Select labelId="gender-select-label" id="gender-label" label={genderLabelText}
                            onChange={(e) => setGender(Number(e.target.value))} value={gender}>
                        <MenuItem value={Gender.male}>Mann</MenuItem>
                        <MenuItem value={Gender.female}>Frau</MenuItem>
                        <MenuItem value={Gender.etc}>Unbekannt</MenuItem>
                    </Select>
                </FormControl>
                <TextField required type={"text"} label={"Vorname"} onChange={(e) => setFirstName(e.target.value)}
                           value={firstName}/>
                <TextField required type={"text"} label={"Nachname"} onChange={(e) => setLastName(e.target.value)}
                           value={lastName}/>
                <TextField required type={"email"} label={"email"} onChange={(e) => setEmail(e.target.value)}
                           value={email}/>
                <TextField required type={"text"} label={"adresse"} onChange={(e) => setAddress(e.target.value)}
                           value={address}/>
                <Typography>Summe: {totalBalance}</Typography>
                <Button type={"submit"}>Bezahlen</Button>
            </form>
        </div>
    );
};
