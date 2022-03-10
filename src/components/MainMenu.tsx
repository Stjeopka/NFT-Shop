import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {userAtom} from "../Models/recoil-states";


export const MainMenu = () => {
    const navigator = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [user, setUser] = useRecoilState(userAtom);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuClicked = (path: string) => {
        navigator(path);
        setAnchorEl(null);
    }

    const logoutUser = () => {
        setUser(null);
        navigator("/");
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant={"contained"}
            >
                Menu
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => menuClicked("home")}>Home</MenuItem>
                <MenuItem onClick={() => menuClicked("/shop")}>Shop</MenuItem>
                <MenuItem onClick={() => menuClicked("impressum")}>Impressum</MenuItem>
                <MenuItem onClick={() => menuClicked("aboutus")}>About Us</MenuItem>
                {!user ?
                    <MenuItem onClick={() => menuClicked("login")}>Login</MenuItem> :
                    <MenuItem onClick={() => logoutUser()}>Logout</MenuItem>
                }
            </Menu>
        </div>
    );
}