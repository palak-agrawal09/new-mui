import { Box, Stack, Typography, IconButton, InputBase } from "@mui/material";
import RoomIcon from '@mui/icons-material/Room';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";



export default function Header() {
    return (
        <Box component="Header" sx={{ boxShadow: 1, p: 1, bgcolor: "#f8f8f8" }}>

            {/* 🔹 Top Bar */}
            <Stack direction="row" spacing={4} justifyContent="flex-end" px={2}>
                <Typography role="presentation" tabindex="-1" class="jsx-f46ef5ee5306e7ff nav_language_icon jdicon">
                </Typography>
                <Typography id="header-lang-selected" class="jsx-f46ef5ee5306e7ff headnav_item_text pl-5 font14 fw400 color007">EN
                    <span role="presentation" tabindex="-1" class="jsx-f46ef5ee5306e7ff nav_drop_icon jdicon ml-4"></span>
                </Typography>
                <Typography variant="body2" sx={{ cursor: 'pointer' }}>Investor</Typography>
                <Typography variant="body2" sx={{ cursor: 'pointer' }}>We are Hiring</Typography>
                <Typography variant="body2" sx={{ cursor: 'pointer' }}>Login</Typography>
            </Stack>

            {/* 🔹 Logo + Location + Search */}
            <Stack direction="row" spacing={3} alignItems="center" mt={2} px={2}>

                {/* Logo */}
                <Box component="img"
                    src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg"
                    alt="Justdial Logo"
                    sx={{ height: 40 }}
                />

                <Button
                    component={Link}
                    to="/location"
                    variant="outlined"
                    startIcon={<RoomIcon />}
                    sx={{ textTransform: "none", color: "gray", borderColor: "gray" }}
                >
                    MUMBAI
                </Button>

                {/* Search Box */}
                <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    flex: 1,
                    border: "1px solid #ccc",
                    borderRadius: 2,
                    px: 2,
                    py: 0.5,
                    ml: 3,
                }}>
                    <InputBase placeholder="Search for Products, Services and Businesses" fullWidth />
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Box>
            </Stack>
        </Box>
    );
}