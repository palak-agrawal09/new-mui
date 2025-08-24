import React from "react";
import {
    Box,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Avatar,
    CardActionArea,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { Link } from "react-router-dom";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import HotelIcon from "@mui/icons-material/Hotel";
import SpaIcon from "@mui/icons-material/Spa";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import WorkIcon from "@mui/icons-material/Work";
import PetsIcon from "@mui/icons-material/Pets";
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import LuggageIcon from '@mui/icons-material/Luggage';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';


const bannerImages = [
    {
        title: "Time to fly at Lowest Airfares",
        subtitle: "Book Now",
        image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_webflight_2024.webp",
    },
    {
        title: "Special Offers",
        subtitle: "Up to 50% off",
        image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/mandapweb.png?t=1",
    },
    {
        title: "Interior designing",
        subtitle: "Contact now",
        image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_interiordesigners_2024.webp",
    },
];

const promoCards = [
    {
        title: "B2B",
        subtitle: "Quick Quotes",
        image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/b2b_square_hotkey.webp?w=3840&q=75",
    },
    {
        title: "Repairs & Services",
        subtitle: "Get Nearest Vendor",
        image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/repair_square_hotkey.webp?w=3840&q=75",
    },
    {
        title: "Real Estate",
        subtitle: "Finest Agents",
        image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/realestate_square_hotkey.webp?w=3840&q=75",
    },
    {
        title: "Doctors",
        subtitle: "Book Now",
        image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/doctor_square_hotkey.webp?w=3840&q=75",
    },
];

const categories = [
    { name: "Restaurants", icon: <RestaurantIcon fontSize="large" /> },
    { name: "Hotels", icon: <HotelIcon fontSize="large" /> },
    { name: "Beauty Spa", icon: <SpaIcon fontSize="large" /> },
    { name: "Home Decor", icon: <HomeIcon fontSize="large" /> },
    { name: "Education", icon: <SchoolIcon fontSize="large" /> },
    { name: "Hospitals", icon: <LocalHospitalIcon fontSize="large" /> },
    { name: "Contractors", icon: <WorkIcon fontSize="large" /> },
    { name: "Pet Shops", icon: <PetsIcon fontSize="large" /> },
    { name: "Shopping", icon: <AddShoppingCartIcon fontSize="large" /> },
    { name: "Agriculture", icon: <AgricultureIcon fontSize="large" /> },
    { name: "Apartment", icon: <ApartmentIcon fontSize="large" /> },
    { name: "Stories", icon: <AutoStoriesIcon fontSize="large" /> },
    { name: "Coffee", icon: <CoffeeMakerIcon fontSize="large" /> },
    { name: "dilivery", icon: <DeliveryDiningIcon fontSize="large" /> },
    { name: "transport", icon: <FireTruckIcon fontSize="large" /> },
    { name: "Airport", icon: <FlightLandIcon fontSize="large" /> },
    { name: "Headphones", icon: <HeadsetMicIcon fontSize="large" /> },
    { name: "Bar", icon: <LocalBarIcon fontSize="large" /> },
    { name: "Travelling", icon: <LuggageIcon fontSize="large" /> },
    { name: "Electrition", icon: <ElectricalServicesIcon fontSize="large" /> },
];

const data = [
    {
        title: "Wedding Requisites",
        items: [
            {
                label: "Banquet Halls",
                img: "https://img.freepik.com/free-photo/luxury-banquet-hall_1232-2511.jpg",
            },
            {
                label: "Bridal Requisite",
                img: "https://img.freepik.com/free-photo/golden-wedding-rings-bouquet_8353-7002.jpg",
            },
            {
                label: "Caterers",
                img: "https://img.freepik.com/free-photo/table-setting_144627-28945.jpg",
            },
        ],
    },
    {
        title: "Beauty & Spa",
        items: [
            {
                label: "Beauty Parlours",
                img: "https://img.freepik.com/free-photo/female-hands-having-manicure-treatment_23-2148938535.jpg",
            },
            {
                label: "Spa & Massages",
                img: "https://img.freepik.com/free-photo/relaxed-young-woman-having-back-massage_1098-14062.jpg",
            },
            {
                label: "Salons",
                img: "https://img.freepik.com/free-photo/young-woman-hairdresser-salon_1303-26278.jpg",
            },
        ],
    },
];

export default function Main() {
    return (
        <Box sx={{ p: 3, backgroundColor: "#f5f5f5" }}>
            {/* Banner Carousel */}
            <Carousel indicators={false} navButtonsAlwaysVisible>
                {bannerImages.map((item, idx) => (
                    <Card key={idx} sx={{ display: "flex", mb: 3 }}>
                        <CardMedia component="img" image={item.image} sx={{ width: 300 }} />
                        <CardContent>
                            <Typography variant="h6">{item.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.subtitle}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Carousel>

            {/* Promo Cards */}
            <Grid container spacing={2} sx={{ mt: 2 }}>
                {promoCards.map((card, idx) => (
                    <Grid item xs={6} sm={3} key={idx}>
                        <Card sx={{ textAlign: "center", p: 2 }}>
                            <CardMedia
                                component="img"
                                image={card.image}
                                sx={{ height: 100, objectFit: "cover" }}
                            />
                            <CardContent>
                                <Typography variant="subtitle1">{card.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {card.subtitle}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Categories (2 rows horizontally like Justdial) */}
            <Box
                sx={{
                    mt: 4,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 3,
                    p: 2,
                }}
            >
                {categories.map((cat, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            textAlign: "center",
                            width: "80px",
                            mb: 2,
                        }}
                        component={cat.name === "Beauty Spa" ? Link : "div"}
                        to={cat.name === "Beauty Spa" ? "/business-listing" : undefined}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <Avatar
                            sx={{
                                bgcolor: "#fff",
                                border: "1px solid #020e1aff",
                                mb: 1,
                                width: 70,
                                height: 70,
                                mx: "auto",
                                color: "#020c16ff",
                            }}
                        >
                            {cat.icon}
                        </Avatar>
                        <Typography variant="caption" fontWeight={500}>
                            {cat.name}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* Services Grid */}
            <Box sx={{ px: 4, py: 4 }}>
                <Grid container spacing={4}>
                    {data.map((section, idx) => (
                        <Grid item xs={12} md={6} key={idx}>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="h6" fontWeight={600}>
                                    {section.title}
                                </Typography>
                            </Box>

                            <Grid container spacing={2}>
                                {section.items.map((item, index) => (
                                    <Grid item xs={4} key={index}>
                                        <Card sx={{ borderRadius: 2 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="120"
                                                    image={item.img}
                                                    alt={item.label}
                                                />
                                                <CardContent sx={{ textAlign: "center", py: 1 }}>
                                                    <Typography variant="body2" fontWeight={500}>
                                                        {item.label}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
