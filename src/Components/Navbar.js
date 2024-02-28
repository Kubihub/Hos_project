import React, { useState,} from 'react'
import Logo from "../Assets/AD.png";
// import {BsCart2} from "react-icons/bs";
// import {HiOutlineBars3} from "react-icons/hi2";
// import{
//     Box,
//     Drawer,
//     ListItem,
//     ListItemButton,
//     ListItemIcon,
//     ListItemText,
// } from "@mui/icons-material";

import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";


const Navbar = () => {

    const[openMenu,setOpenMenu]= useState(false)
    const menuOptions=[
        {
            text: "Home",
            icon:<HomeIcon/>
        },

        {
            text: "Services",
            icon:<InfoIcon/>
        },

        {
            text: "Learnmore",
            icon:<CommentRoundedIcon/>
        },

        {
            text: "Downapp",
            icon:<PhoneRoundedIcon/>
        },

        {
            text: "Article",
            icon:<InfoIcon/>
        },

        
    ]
  return (
    <nav>
        <div className='nav-logo-container'>
            <img src={Logo} alt="" height={50} width={50}/>
        </div>
        <div className='navbar-links-container'>
            <a href='#'>Home</a>
            <a href='#'>Find a doctor</a>
            <a href='#'>Apps</a>
            <a href='#'>Testimonials</a>
            <a href='#'>About us</a>
            
        </div>
    </nav>
  )
}

export default Navbar