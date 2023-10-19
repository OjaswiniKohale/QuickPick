import { AppBar,InputBase,Toolbar,Typography,styled, Badge } from '@mui/material'
import React from 'react'
import QuickPickLogo from '../assets/quickPicklogo .png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({ theme })=>({border: " 2.5px solid #F57F17",
padding:"0 10px",
borderRadius: theme.shape.borderRadius,
width: "40%",
height: "2rem"
}))

const Icons = styled("Box")(({ theme })=>({}))

const Navbar = () => {
    return(
        <AppBar position='sticky' sx={{backgroundColor: "white"}}>
            <StyledToolBar>
                <Link to="/">
                <img src={QuickPickLogo} style={{height:"4rem", marginLeft:"-1.5rem"}}/>
                </Link>
                <Search sx={{color:"black", display:"flex", justifyContent:"flexstart", alignItems: "center" }}><InputBase placeholder='search...' sx={{width: "100%"}}/></Search>
                <Icons>
                <Link to="/Cart">
                    <Badge color="primary" sx={{ marginRight: "1.2rem", fontSize: "4rem"}}>
                        <ShoppingCartIcon color="action" sx={{fontSize: "2rem", color: "#F57F17" }}/>
                    </Badge>
                </Link>
                <Link to="/login">
                    <Badge sx={{fontSize: "2rem"}}>
                        <AccountCircleIcon color="action" sx={{fontSize: "2rem", color: "#F57F17" }}/>
                    </Badge>
                </Link>
                </Icons>
            </StyledToolBar>
        </AppBar>
    )
}

export default Navbar