import React, { useState } from "react";
import {
    Box,
    Stack,
    Typography,
    IconButton,
    InputBase,
    Button,
    Menu,
    MenuItem
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TranslateIcon from "@mui/icons-material/Translate";
import Select from "react-select";

const options = [
    { value: "detect", label: "📍 Detect Location" },
    { value: "nimach", label: "nimach" },
    { value: "Mandsaur", label: "Mandsaur" },
    { value: "chittor", label: "chittor" },
    { value: "Delhi", label: "Delhi" },
    { value: "Udaipur", label: "Udaipur" },
    { value: "Ajmer", label: "Ajmer" },
    { value: "Banglore", label: "Banglore" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Mumbai", label: "Mumbai" },
    { value: "Jodhpur", label: "Jodhpur" },
];

export default function Header() {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [language, setLanguage] = useState("EN"); // default language

    const handleSelectChange = (option) => setSelectedOption(option);

    // 🔹 Language Menu Handlers
    const handleLangClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLangClose = (lang) => {
        if (lang) setLanguage(lang);
        setAnchorEl(null);
    };

    return (
        <>
            {/* 🔹 Header Bar */}
            <Box
                component="header"
                sx={{
                    boxShadow: 1,
                    p: 1,
                    bgcolor: "#f8f8f8",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1100,
                }}
            >
                {/* 🔹 Top Bar */}
                <Stack direction="row" spacing={4} justifyContent="flex-end" px={2}>
                    {/* Language Selector with Icon */}
                    <Stack
                        direction="row"
                        spacing={0.5}
                        alignItems="center"
                        sx={{ cursor: "pointer" }}
                        onClick={handleLangClick}
                    >
                        <TranslateIcon fontSize="small" sx={{ color: "gray" }} />
                        <Typography variant="body2">{language}</Typography>
                    </Stack>

                    <Typography variant="body2" sx={{ cursor: "pointer" }}>
                        Investor
                    </Typography>
                    <Typography variant="body2" sx={{ cursor: "pointer" }}>
                        We are Hiring
                    </Typography>
                    <Typography variant="body2" sx={{ cursor: "pointer" }}>
                        Login
                    </Typography>
                </Stack>

                {/* 🔹 Language Dropdown */}
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => handleLangClose(null)}
                >
                    <MenuItem onClick={() => handleLangClose("EN")}>English</MenuItem>
                    <MenuItem onClick={() => handleLangClose("HI")}>हिंदी</MenuItem>
                    <MenuItem onClick={() => handleLangClose("MR")}>मराठी</MenuItem>
                    <MenuItem onClick={() => handleLangClose("GU")}>ગુજરાતી</MenuItem>
                </Menu>

                {/* 🔹 Logo + Search */}
                <Stack direction="row" spacing={3} alignItems="center" mt={2} px={2}>
                    {/* Logo */}
                    <Box
                        component="img"
                        src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg"
                        alt="Justdial Logo"
                        sx={{ height: 40 }}
                    />

                    {/* Search + Dropdown */}
                    <Box sx={{ position: "relative", flex: 1, maxWidth: "700px" }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                border: "1px solid #ccc",
                                borderRadius: "30px",
                                px: 2,
                                py: 0.5,
                                pl: "160px",
                            }}
                        >
                            <InputBase
                                placeholder="Search for Products, Services and Businesses"
                                fullWidth
                            />
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </Box>

                        {/* Dropdown */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "10px",
                                transform: "translateY(-50%)",
                                width: "140px",
                                "& .react-select__control": {
                                    border: "none",
                                    boxShadow: "none",
                                    borderRadius: "20px",
                                    minHeight: "35px",
                                },
                            }}
                        >
                            <Select
                                options={options}
                                value={selectedOption}
                                onChange={handleSelectChange}
                                classNamePrefix="react-select"
                                menuPortalTarget={document.body}
                                styles={{
                                    control: (base) => ({
                                        ...base,
                                        border: "none",
                                        boxShadow: "none",
                                        minHeight: "35px",
                                    }),
                                    dropdownIndicator: (base) => ({
                                        ...base,
                                        padding: "2px",
                                    }),
                                    valueContainer: (base) => ({
                                        ...base,
                                        padding: "0px 6px",
                                    }),
                                    menuPortal: (base) => ({
                                        ...base,
                                        zIndex: 9999,
                                    }),
                                }}
                            />
                        </Box>
                    </Box>
                </Stack>
            </Box>

            {/* Push content below header */}
            <Box sx={{ pt: "90px" }} />
        </>
    );
}
