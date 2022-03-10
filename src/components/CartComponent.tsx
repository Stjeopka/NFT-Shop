// @flow
import * as React from 'react';
import "../styles/Cart.scss"
import {Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography} from "@mui/material";
import {useRecoilState, useRecoilValue} from "recoil";
import {shoppingCartAtom, userAtom} from "../Models/recoil-states";
import {useNavigate} from "react-router-dom";

export const CartComponent = () => {
    const nav = useNavigate();
    const [user] = useRecoilState(userAtom);
    const [cart, setCart] = useRecoilState(shoppingCartAtom);
    const isBuyDisabled = (): boolean => {
        return cart.length == 0;
    }
    return (
        <div>
            <div>
                <Typography variant={"h3"}>Warenkorb</Typography>
            </div>
            {cart.length == 0 ? (
                <div>
                    <Typography variant={"subtitle1"}>Warenkorb ist leer</Typography>
                </div>
            ) : (
                <Grid container spacing={2} direction="row" wrap={"nowrap"} alignContent="center" justifyContent="center">
                    {cart.map(item => (
                        <Grid item xs={5}>
                            <Card>
                                <CardHeader title={<Typography variant={"subtitle1"}>{item.description}</Typography>}/>
                                {item.src ? <CardMedia component="img" height={194} image={item.src}></CardMedia> : null}
                                <CardContent>
                                    <Typography>{item.value} $</Typography>
                                </CardContent>
                                <CardActions>
                                    <Grid container alignContent="center" justifyContent="center">
                                        <Button
                                            onClick={() => setCart(cart.filter(i => i.id != item.id))}>Entfernen</Button>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>

                    ))}
                </Grid>
            )}

            {user ? <Button variant={"contained"} style={{margin:"5px"}} disabled={isBuyDisabled()} onClick={() => nav("/checkout")}>Kaufen</Button> : (
                <div>
                    Bitte Einloggen
                </div>
            )}
        </div>
    );
};
