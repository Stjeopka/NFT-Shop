import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {createTheme, ThemeProvider, useTheme} from "@mui/material";
import {lime} from "@mui/material/colors"
const theme=createTheme({
    palette:{
        primary:lime
}

});

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}>
                {/*sub-components*/}
              </Route>
          </Routes>
      </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
