import { AppBar,InputBase,Toolbar,Typography,styled, Badge } from '@mui/material'
import React from 'react'
import QuickPickLogo from '../assets/quickPicklogo .png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme })=>({border: " 2px solid #FF5722",
padding:"0 10px",
borderRadius: theme.shape.borderRadius,
width: "40%",
height: "2rem"
}))

const Icons = styled("Box")(({ theme })=>({borderBlockColor: " 2px solid #FF5722",}))

const Navbar = () => {
    return(
        <AppBar position='sticky' sx={{backgroundColor: "white"}}>
            <StyledToolBar>
                <img src={QuickPickLogo} style={{height:"4rem", marginLeft:"-1.5rem"}}/>
                <Search sx={{color:"black", display:"flex", justifyContent:"flexstart", alignItems: "center" }}><InputBase placeholder='search...'/></Search>
                <Icons>
                    <Badge badgeContent={4} color="primary" sx={{ marginRight: "1.2rem", fontSize: "4rem"}}>
                        <ShoppingCartIcon color="action" />
                    </Badge>
                    <Badge sx={{fontSize: "2rem"}}>
                        <AccountCircleIcon color="action" />
                    </Badge>
                </Icons>
            </StyledToolBar>
        </AppBar>
    )
}

export default Navbar