// @flow
import { Box, Button, Card, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Stack, Typography } from '@mui/material';
import * as React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import 'swiper/css';
  import 'swiper/css/navigation';
import "../styles/HomePage.scss"

export const HomePageComponent = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (

        <>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >   
            <DialogTitle>
            <Typography variant="h4">Upcoming server maintenance on 20.03.2022</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    We will conduct a server maintenance on the 20.03.2022 from approximately 8pm GMT until 10pm GMT. 
                    Please understand that during this time users will not be able to make purchases through our platform.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>

        <div id="container">
                <div>
                    <Box id="banner">
                        <Typography id="headline" variant="h1">NFT TRADING</Typography>
                    </Box>
                </div>
                <div id="newsFeed">
                    <Typography id="newsHeadline" variant="h2">Latest News</Typography>
                    <Swiper navigation={true} modules={[Navigation]} className="swiper">
                        <SwiperSlide className="swiperSlide">
                            <img className="swiperImg" src="https://image.shutterstock.com/image-photo/young-engeneer-business-man-thin-600w-574000213.jpg"/>
                            <Typography className="swiperHeadline" variant="h3">Upcoming server maintenance on 20.03.2022</Typography>
                            <Grid justifyContent="flex-end" alignItems="flex-end">
                                <Button className = "newsFeedButton" variant="contained" onClick={handleClickOpen}>Learn more</Button>
                            </Grid>                           
                        </SwiperSlide>
                        <SwiperSlide className="swiperSlide">
                            <Typography className="swiperHeadline" variant="h3">no current news</Typography>
                        </SwiperSlide> 
                        <SwiperSlide className="swiperSlide">
                            <Typography className="swiperHeadline" variant="h3">no current news</Typography>
                        </SwiperSlide> 
                    </Swiper>
                    <div id="featureContainer">
                        <p id="featuresHeader">What we offer:</p>
                        <Stack id="featureList" direction="row">
                            <Card className="cards">
                                <CardMedia
                                    className="imgContainer"
                                    component="img"
                                    image="https://image.shutterstock.com/image-vector/0-zero-percent-commission-blue-600w-1937741992.jpg"/>

                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="div">
                                        Zero transaction fees
                                    </Typography>

                                    <Typography variant="body1" className="cardSubText">
                                        There are no transaction fees when making a purchase throuh our website.
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card className="cards">
                                <CardMedia
                                    className="imgContainer"
                                    component="img"
                                    image="https://image.shutterstock.com/image-photo/business-man-holding-phone-600w-1049641082.jpg"/>

                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="div">
                                        Real-time feedback
                                    </Typography>

                                    <Typography variant="body1" className="cardSubText">
                                        We offer real-time tracking of market prices and development.
                                    </Typography>
                                </CardContent>
                            </Card>

                            <Card className="cards">
                                <CardMedia
                                    className="imgContainer"
                                    component="img"
                                    image="https://image.shutterstock.com/image-vector/business-people-shaking-hands-over-600w-1770927995.jpg"
                                />

                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="div">
                                        Exclusive deals and offers
                                    </Typography>

                                    <Typography variant="body1" className="cardSubText">
                                        We work with artists and creators to secure exclusive deals and offers for our users.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Stack>
                    </div>
                </div>
            </div></>
    );
};