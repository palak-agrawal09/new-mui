// WeddingServices.jsx
import React from "react";
import {
    Box,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Typography,
    Button,
    Rating,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import ChatIcon from "@mui/icons-material/Chat";

const data = [
    {
        id: 1,
        name: "Rich look",
        rating: 4.8,
        reviews: 109,
        address: "Vinay Nagar Mira Road East, Nimach",
        phone: "08460556216",
        image:
            "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/salons_rectangle_2024.webp?w=640&q=75/", // sample image
    },
    {
        id: 2,
        name: "soul Spa",
        rating: 4.5,
        reviews: 21,
        address: "surajpol, udaipur",
        phone: "08123145277",
        image:
            "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-beauty-spa-for-men-web.png",
    },
    {
        id: 3,
        name: "Care Artist",
        rating: 4.8,
        reviews: 65,
        address: "5 BLOCK Goregaon West, Nimach",
        phone: "09972357670",
        image:
            "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-anti-aging-web.png?w=256&q=75",
    },
    {
        id: 4,
        name: "Sam Makeover",
        rating: 4.8,
        reviews: 61,
        address: "Off Sv Road Goregaon West, Udaipur",
        phone: "1234567890",
        image:
            "https://akam.cdn.jdmagicbox.com/images/icons/iphone/newfilter/ip-makeup-artists-web.png?w=256&q=75",
    },
];

const WeddingServices = () => {
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
                Explore Wedding Services
            </Typography>

            <Grid container spacing={3} justifyContent="center">
                {data.map((item) => (
                    <Grid item xs={12} sm={6} md={5} key={item.id}>
                        <Card sx={{ display: "flex", p: 1, borderRadius: 3, boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 120, borderRadius: 2 }}
                                image={item.image}
                                alt={item.name}
                            />
                            <CardContent sx={{ flex: "1 0 auto" }}>
                                <Typography variant="h6" fontWeight="bold">
                                    {item.name}
                                </Typography>
                                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                    <Rating
                                        value={item.rating}
                                        precision={0.1}
                                        readOnly
                                        size="small"
                                    />
                                    <Typography variant="body2" sx={{ ml: 1 }}>
                                        {item.rating} ★ ({item.reviews} Ratings)
                                    </Typography>
                                </Box>
                                <Typography variant="body2" color="text.secondary">
                                    {item.address}
                                </Typography>

                                <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        startIcon={<PhoneIcon />}
                                    >
                                        {item.phone}
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<ChatIcon />}
                                    >
                                        Enquire Now
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{ textAlign: "center", mt: 3 }}>
                <Button variant="contained" size="large">
                    View All
                </Button>
            </Box>
        </Box>
    );
};

export default WeddingServices;
