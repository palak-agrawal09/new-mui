import { Box, Button, Grid, Menu, MenuItem } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { BASE_URL } from '../helper/Helper';
import axios from 'axios';

export default function Header() {
    const [locale, setLocale] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);

    const [options, setOptions] = useState([
        { value: 'detect location', label: 'Detect Location' },
        { value: 'Indore', label: 'Indore' },
        { value: 'Neemuch', label: 'Neemuch' },
        { value: 'Ujjain', label: 'Ujjain' },
        { value: 'Bhopal', label: 'Bhopal' },
        { value: 'Mandsaur', label: 'Mandsaur' }
    ]);

    const [business] = useState([
        { value: "hotels", label: "Hotels" },
        { value: 'Restaurants', label: 'Restaurants' },
        { value: 'Beauty Spa', label: 'Beauty Spa' },
        { value: 'Home Decor', label: 'Home Decor' },
        { value: 'Hospitals', label: 'Hospitals' },
        { value: 'Gym', label: 'Gym' },
        { value: 'Software Company', label: 'Software Company' },
        { value: 'Education', label: 'Education' },
        { value: 'Car Hire', label: 'Car Hire' }
    ]);

    const [cityName, setCityName] = useState(null);

    useEffect(() => {
        axios.get(`${BASE_URL}/api/i18n/locales`)
            .then((response) => setLocale(response?.data))
            .catch((error) => console.log(error));
    }, []);

    const detectLocation = (selectedOption) => {
        if (selectedOption.value === "detect location") {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;
                    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}&accept-language=en`;

                    fetch(url)
                        .then(res => res.json())
                        .then(data => {
                            const city = data.address.city || data.address.town || data.address.village || "Unknown";
                            const detectedCity = { value: city, label: city };
                            setCityName(detectedCity);

                            if (!options.some(opt => opt.value === city)) {
                                setOptions(prev => [prev[0], ...prev.slice(1), detectedCity]);
                            }
                        })
                        .catch(err => console.error(err));
                });
            }
        } else {
            setCityName(selectedOption);
        }
    };

    return (
        <Box
            component="header"
            sx={{ height: "83px", display: "flex", alignItems: "center", px: 2 }}
        >
            {/* Logo */}
            <Box
                component="img"
                src="https://akam.cdn.jdmagicbox.com/images/icontent/jdrwd/jdlogosvg.svg"
                alt="Logo"
                sx={{ height: '25px', mr: 3 }}
            />

            {/* City + Business Dropdowns */}
            <Grid container spacing={2} sx={{ flex: 1 }}>
                <Grid item xs={6}>
                    <Select
                        options={options}
                        value={cityName}
                        onChange={detectLocation}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Select options={business} />
                </Grid>
            </Grid>

            {/* Language Dropdown (MUI Menu) */}
            <Button
                sx={{ ml: 2 }}
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                EN
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
            >
                {locale.map((cv, idx) => (
                    <MenuItem key={idx}>{cv.name}</MenuItem>
                ))}
            </Menu>

            {/* Action Buttons */}
            <Button variant="text" sx={{ color: "black", fontSize: "12px", textTransform: "none", ml: 2 }}>We Are Hiring</Button>
            <Button variant="text" sx={{ color: "black", fontSize: "12px", textTransform: "none" }}>Investor Relations</Button>
            <Button variant="text" sx={{ color: "black", fontSize: "12px", textTransform: "none" }}><MessageIcon fontSize="small" /> Leads</Button>
            <Button variant="text" sx={{ color: "black", fontSize: "12px", textTransform: "none" }}><CampaignIcon fontSize="small" /> Advertise</Button>
            <Button variant="text" sx={{ color: "black", fontSize: "12px", textTransform: "none" }}><TrendingUpIcon fontSize="small" /> Free Listing</Button>
            <Button variant="contained" sx={{ fontSize: "12px", ml: 1, textTransform: "none" }}>Login/SignUp</Button>
        </Box>
    );
}
