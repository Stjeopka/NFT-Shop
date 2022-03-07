import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {createTheme, ThemeProvider} from "@mui/material";
import {lime} from "@mui/material/colors"
import {NftItem} from "./Models/User";
import {ShopComponent} from "./components/ShopComponent";
import {CheckOutComponent} from "./components/CheckOutComponent";
import {CartComponent} from "./components/CartComponent";
import {LoginComponent} from "./components/LoginComponent";
import {RecoilRoot} from "recoil";

const theme = createTheme({
    palette: {
        primary: lime
    }
});

const allItems: NftItem[] = [{
    value: 5.0,
    description: "Demo text",
    id: 1,
}];

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<App/>}>
                            {/*sub-components*/}
                            <Route path="shop" element={<ShopComponent allItems={allItems}/>}/>
                            <Route path="chekout" element={<CheckOutComponent/>}/>
                            <Route path="cart" element={<CartComponent/>}/>
                            <Route path="aboutus" element={null}/>
                            <Route path="impressum" element={null}/>
                            <Route path="home" element={null}/>
                            <Route path="login" element={<LoginComponent/>}/>

                            <Route path="*" element={<div>404 Not found</div>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
