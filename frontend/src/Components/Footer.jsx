import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import SpaIcon from '@mui/icons-material/Spa'




export default function Footer() {
    return (
        <Box component="footer" sx={{
            backgroundColor: '#f6f4c0', // light yellowish background
            py: 2,
            px: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
        }}>
            {/* Left Section: Follow Us */}
            <Stack direction="row" alignItems="center" spacing={2}>
                <Typography variant="subtitle1" fontWeight="bold">
                    Follow us on
                </Typography>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="Facebook" height={30} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" alt="YouTube" height={30} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" height={30} />
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" height={30} />
            </Stack>

            {/* Right Section: App Download */}
            <Stack direction="row" spacing={2}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    height={40}
                />
                <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    height={40}
                />
            </Stack>
            <h1>One-Stop for All Local Businesses, Services, & Stores Nearby Across India</h1>
            <Typography variant="body2">Our service extends from providing address and contact details of business establishments around the country, to making orders and reservations for leisure, medical, financial, travel and domestic purposes. We enlist business information across varied sectors like Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care, Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over the country. Holding information right from major cities like Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Ahmedabad and Pune our reach stretches out to other smaller cities across the country too.
                Our 'Free Listing' feature gives a platform to showcase varied specialities. We then furnish you with the information via phone, SMS, web, App and WAP as well as, create a space for you to share your experiences through our 'Rate & Review' feature. Through the 'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you are offered the best bargains in the market.</Typography>
            <h1>Some of our services that will prove useful to you on a day-to-day basis are :</h1>
        </Box>
    );
}