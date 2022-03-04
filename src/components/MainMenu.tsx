import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from "react-router-dom";


export const MainMenu=() => {
    const navigator=useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event:any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuClicked=(path:string)=>{
        navigator(path);
        setAnchorEl(null);
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
                <MenuItem onClick={()=>menuClicked("/shop")}>Shop</MenuItem>
                <MenuItem onClick={()=>menuClicked("login")}>Login</MenuItem>
                <MenuItem onClick={()=>menuClicked("cart")}>Cart</MenuItem>
                <MenuItem onClick={()=>menuClicked("impressum")}>Impressum</MenuItem>
                <MenuItem onClick={()=>menuClicked("aboutus")}>About Us</MenuItem>
            </Menu>
        </div>
    );
}