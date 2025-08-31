import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import BusinessListingPage from "./Components/pages/Restaurant";

function App() {
  return (
    <>
      {/* Fixed Header */}
      <Header />

      {/* Main Content Area */}
      <Box sx={{ minHeight: "80vh" }}>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Main />} />

          {/* Business Listing Page (Beauty & Spa) */}
          <Route path="/business-listing" element={<BusinessListingPage />} />
        </Routes>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
