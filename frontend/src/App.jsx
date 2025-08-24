import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import BusinessListing from "./Components/BusinessListing";

function App() {
  return (
    <Router>
      <Header />
      <Box sx={{ minHeight: "80vh" }}>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Main />} />

          {/* Business Listing Page (Beauty & Spa) */}
          <Route path="/business-listing" element={<BusinessListing />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
