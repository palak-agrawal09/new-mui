import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    InputAdornment,
    Card,
    Grid,
    useTheme,
    useMediaQuery,
    CardMedia,
    CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const billsAndRecharge = [
    { label: "Mobile", icon: "position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" },
    { label: "Electricity", icon: "position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" },
    { label: "DTH", icon: "position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;" },
    { label: "Water", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/recharge_water_2024.svg" },
    { label: "Gas", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/recharge_gas_2024.svg" },
    { label: "Insurance", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/recharge_insurance_2024.svg" },
];

const travelBookings = [
    { label: "Flight", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_flight.svg?w=64&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_flight.svg?w=128&q=75 2xhttps://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_bus.svg?w=128&q=75 2x" },
    { label: "Hotel", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_hotels.svg?w=64&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_hotels.svg?w=128&q=75 2x" },
    { label: "Train", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_train.svg?w=64&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_train.svg?w=128&q=75 2x" },
    { label: "Car Rentals", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_carhire.svg?w=64&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bt_carhire.svg?w=128&q=75 2x" },
];

const carouselItems = [
    { img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_loans_2024.webp", background: "#eaf7ff" },
    { img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_webflight_2024.webp", background: "#fff7e6" },
    { img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_bills_2024.webp", background: "#e8fff1" },
    { img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_interiordesigners_2024.webp", background: "#eaf7ff" },
];

const serviceCards = [
    { title: "B2B", subtitle: "Quick Quotes", background: "#0E77CD", img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/b2b_square_hotkey.webp?w=3840&q=75" },
    { title: "REPAIRS & SERVICES", subtitle: "Get Nearest Vendor", background: "#0B5394", img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/repair_square_hotkey.webp?w=3840&q=75" },
    { title: "REAL ESTATE", subtitle: "Finest Agents", background: "#6A1B9A", img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/realestate_square_hotkey.webp?w=3840&q=75" },
    { title: "DOCTORS", subtitle: "Book Now", background: "#00796B", img: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/doctor_square_hotkey.webp?w=3840&q=75" },
];

const categories = [
    { label: "Restaurants", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/restaurant-2022.svg" },
    { label: "Hotels", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hotel-2022.svg" },
    { label: "Beauty Spa", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/beauty.svg" },
    { label: "Home Decor", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/homedecor.svg" },
    { label: "Wedding Planning", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hotkey_wedding_icon.gif" },
    { label: "Education", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/education.svg" },
    { label: "Rent & Hire", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/renthire.svg" },
    { label: "Hospitals", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hospital_2023.svg" },
    { label: "Contractors", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/contractor-2022.svg" },
    { label: "Pet Shops", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg" },
    { label: "PG/Hostels", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pg-hostels-rooms.svg" },
    { label: "Estate Agent", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/estate-agent.svg" },
    { label: "Dentists", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/dentist_2023.svg" },
    { label: "Gym", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/gym_2023.svg" },
    { label: "Loans", icon: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/newhotkey/loans.svg" },
    { label: "Event Organisers", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/eventorganizers.svg" },
    { label: "Driving Schools", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/driving_school_2023.svg" },
    { label: "Packers & Movers", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/packers_movers_2023.svg" },
    { label: "Courier Service", icon: "https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/courier_2023.svg" },
    { label: "Popular Categories", icon: "/popularcategory.jpeg" },
];

const sectionCards = [
    {
        title: "Wedding Requisites",
        items: [
            { title: "Banquet Halls", image: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banquethalls_rectangle_2024.webp" },
            { title: "Bridal Requisite", image: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bridalrequisite_rectangle_2024.webp" },
            { title: "Caterers", image: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/caterers_rectangle_2024.webp" },
        ],
    },
    {
        title: "Beauty & Spa",
        items: [
            { title: "Beauty Parlours", image: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/beautyparlours_rectangle_2024.webp" },
            { title: "Spa & Massages", image: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/spamassages_rectangle_2024.webp" },
            { title: "Salons", image: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/salons_rectangle_2024.webp" },
        ],
    },
    {
        title: "Repairs & Services",
        items: [
            { title: "AC Service", image: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_acrepair.png?w=256&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_acrepair.png?w=640&q=75 2x" },
            { title: "Car Service", image: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/carservice_rectangle_2024.webp?w=256&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/carservice_rectangle_2024.webp?w=640&q=75 2x" },
            { title: "Bike Service", image: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bikeservice_rectangle_2024.webp?w=256&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/bikeservice_rectangle_2024.webp?w=640&q=75 2x" },
        ],
    },
    {
        title: "Daily Needs",
        items: [
            { title: "Movies", image: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_movies.png?w=256&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_movies.png?w=640&q=75 2x" },
            { title: "Grocery", image: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/grocery_rectangle_2024.webp?w=256&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/grocery_rectangle_2024.webp?w=640&q=75 2x" },
            { title: "Electricians", image: "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/electricians_rectangle_2024.webp?w=256&q=75 1x, https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/electricians_rectangle_2024.webp?w=640&q=75 2x" },
        ],
    },
];

function ServiceSection({ title, subtitle, items }) {
    return (
        <Box sx={{ border: "1px solid #ddd", borderRadius: 2, p: 2, mt: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {subtitle}
            </Typography>
            <Grid container spacing={2}>
                {items.map((item, index) => (
                    <Grid item xs={4} sm={2} key={index}>
                        <Card
                            sx={{
                                borderRadius: 3,
                                p: 2,
                                textAlign: "center",
                                boxShadow: "none",
                                border: "1px solid #eee",
                                cursor: "pointer",
                                "&:hover": { boxShadow: 3, transform: "scale(1.05)" },
                                transition: "all 0.3s ease",
                            }}
                        >
                            <Box
                                component="img"
                                src={item.icon}
                                alt={item.label}
                                sx={{ width: 40, height: 40, mb: 1 }}
                            />
                            <CardContent sx={{ p: 0 }}>
                                <Typography variant="body2" fontWeight={500}>
                                    {item.label}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default function CategorySearchSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const rotatingTexts = [
        <>‘4.7 Crore+’ <span style={{ color: "#0070c0" }}>Businesses</span></>,
        <>‘5.9 Crore+’ <span style={{ color: "#0070c0" }}>Products & Services</span></>,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{ backgroundColor: "#fff", px: 2, py: 3 }}>
            {/* Heading */}
            <Box sx={{ height: isMobile ? 32 : 38, overflow: "hidden", mb: 1 }}>
                <Typography
                    variant={isMobile ? "h6" : "h5"}
                    sx={{ fontWeight: "bold", color: "#333", textAlign: "start", lineHeight: 1.2 }}
                >
                    Search across&nbsp;
                    <Box sx={{ display: "inline-block", height: isMobile ? 32 : 38, overflow: "hidden" }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                transition: "transform 0.6s ease",
                                transform: `translateY(-${currentIndex * (isMobile ? 32 : 38)}px)`,
                            }}
                        >
                            {rotatingTexts.map((text, idx) => (
                                <Box key={idx} sx={{ height: isMobile ? 32 : 38 }}>
                                    {text}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Typography>
            </Box>

            {/* Search Fields */}
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                <TextField
                    placeholder="Mumbai"
                    size="small"
                    sx={{ minWidth: 150 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocationOnSharpIcon sx={{ color: "#757575" }} />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    placeholder="Search for Spa, Salons..."
                    size="small"
                    sx={{ minWidth: 450 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <MicIcon sx={{ color: "#0070c0", cursor: "pointer" }} />
                                <Button
                                    variant="contained"
                                    color="warning"
                                    size="small"
                                    sx={{ px: 1, minWidth: 20 }}
                                >
                                    <SearchIcon />
                                </Button>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            {/* Carousel + Service Cards */}
            <Box sx={{ mt: 4, display: "flex", flexDirection: isMobile ? "column" : "row", gap: 2 }}>
                {/* Carousel */}
                <Box
                    sx={{
                        width: isMobile ? "100%" : "550px",
                        height: "240px",
                        borderRadius: 2,
                        overflow: "hidden",
                    }}
                >
                    <Slider {...sliderSettings} accessibility={false}>
                        {carouselItems.map((item, index) => (
                            <Box key={index} sx={{ width: "100%", height: "240px" }}>
                                <Box
                                    component="img"
                                    src={item.img}
                                    alt={`carousel-${index}`}
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: 2,
                                    }}
                                />
                            </Box>
                        ))}
                    </Slider>
                </Box>

                {/* Service Cards */}
                <Box sx={{ flex: 1, display: "flex", overflowX: "auto", gap: 2, pb: 1 }}>
                    {serviceCards.map((card, index) => (
                        <Card
                            key={index}
                            sx={{
                                minWidth: 170,
                                height: 240,
                                borderRadius: 2,
                                position: "relative",
                                flexShrink: 0,
                                backgroundColor: card.background,
                                overflow: "hidden",
                                cursor: "pointer",
                            }}
                        >
                            <Box
                                component="img"
                                src={card.img}
                                alt={card.title}
                                className="zoom-img"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.4s ease",
                                    position: "relative",
                                }}
                            />
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    px: 2,
                                    py: 1.5,
                                    color: "#fff",
                                }}
                            >
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {card.title}
                                </Typography>
                                <Typography variant="body2">{card.subtitle}</Typography>
                            </Box>
                        </Card>
                    ))}
                </Box>
            </Box>



            {/* Categories */}
            <Box sx={{ mt: 2, px: 2 }}>
                <Grid container spacing={3}>
                    {categories.slice(0, 10).map((category, index) => (
                        <Grid item key={index} xs={6} sm={3} md={2}>
                            <Box sx={{ textAlign: "center" }}>
                                <Card
                                    sx={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: "20%",
                                        backgroundColor: "#e0f7ff",
                                        boxShadow: 1,
                                        transition: "transform 0.3s ease",
                                        "&:hover": { transform: "scale(1.1)" },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={category.icon}
                                        alt={category.label}
                                        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </Card>
                                <Typography variant="caption" sx={{ mt: 1 }}>
                                    {category.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                <Grid container spacing={3} mt={3}>
                    {categories.slice(10, 20).map((category, index) => (
                        <Grid item key={index} xs={6} sm={3} md={2}>
                            <Box sx={{ textAlign: "center" }}>
                                <Card
                                    sx={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: "20%",
                                        backgroundColor: "#e0f7ff",
                                        boxShadow: 1,
                                        transition: "transform 0.3s ease",
                                        "&:hover": { transform: "scale(1.1)" },
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={category.icon}
                                        alt={category.label}
                                        sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </Card>
                                <Typography variant="caption" sx={{ mt: 1 }}>
                                    {category.label}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Section Cards (Wedding, Beauty, Repairs, Daily Needs) */}
            <Box sx={{ mt: 4 }}>
                {sectionCards.map((section, idx) => (
                    <Box key={idx} sx={{ mb: 4 }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                            {section.title}
                        </Typography>
                        <Grid container spacing={2}>
                            {section.items.map((item, index) => (
                                <Grid item xs={12} sm={4} md={3} key={index}>
                                    <Card
                                        sx={{
                                            borderRadius: 2,
                                            overflow: "hidden",
                                            cursor: "pointer",
                                            boxShadow: 2,
                                            "&:hover": { boxShadow: 5, transform: "scale(1.03)" },
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            height="160"
                                            image={item.image}
                                            alt={item.title}
                                        />
                                        <CardContent sx={{ p: 1.5 }}>
                                            <Typography
                                                variant="body1"
                                                fontWeight="500"
                                                textAlign="center"
                                            >
                                                {item.title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                ))}
            </Box>
            {/* Bills & Travel Sections */}
            <Box sx={{ px: 2, py: 4, backgroundColor: "#fff" }}>
                <ServiceSection
                    title="Bills & Recharge"
                    subtitle="Pay your bills & recharge instantly with Justdial"
                    items={billsAndRecharge}
                />
                <ServiceSection
                    title="Travel Bookings"
                    subtitle="Instant ticket bookings for your best travel experience"
                    items={travelBookings}
                />
            </Box>
        </Box>
    );
}


