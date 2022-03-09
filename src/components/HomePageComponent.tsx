// @flow
import { Box, Card, CardContent, CardMedia, Divider, List, ListItem, Stack, Typography } from '@mui/material';
import * as React from 'react';
import "../styles/HomePage.scss"
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

export const HomePageComponent = () => {
    return (
        <div id = "container">
            <div>
                <Box id = "banner">
                    <Typography id = "headline" variant = "h1">NFT TRADING</Typography>
                </Box>
            </div>

                <div id = "featureContainer">
                    <p id = "featuresHeader">Our features:</p>
                    <Stack id = "featureList" direction = "row">
                        <Card className = "cards">
                           <CardMedia 
                                className = "imgContainer"
                                component = "img"
                                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHv1TJK0v9obz-D0zh522GbHwxSTvunzUx2dCcRcMDiJPqczp1yopDijcTX9M4e737lo&usqp=CAU"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    Zero transaction fees
                                </Typography>

                                <Typography variant = "body1" className = "cardSubText">
                                    There are no transaction fees when making a purchase throuh our website.    
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card className = "cards">
                            <CardMedia 
                                className = "imgContainer"
                                component = "img"
                                image = "https://th.bing.com/th/id/R.ffd123e7c06ec5de769143166c9e6c51?rik=GURPzOGst1adgg&pid=ImgRaw&r=0"
                            />

                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    Real-time feedback
                                </Typography>

                                <Typography variant = "body1" className = "cardSubText">
                                    We offer real-time tracking of market prices and development.    
                                </Typography>
                            </CardContent>
                        </Card>     

                        <Card className = "cards">
                            <CardMedia 
                                className = "imgContainer"
                                component = "img"
                                image = "" //insert image
                            />

                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    Exclusive deals and offers
                                </Typography>

                                <Typography variant = "body1" className = "cardSubText">
                                    We work with artists and creators to secure exclusive deals and offers for our users.   
                                </Typography>
                            </CardContent>
                        </Card>               
                        </Stack>   
                </div>

        </div>
    );
    };