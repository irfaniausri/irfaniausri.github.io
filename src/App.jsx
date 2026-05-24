import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import NutritionalCalculatorPage from "./pages/NutritionalCalculatorPage";
import KetoneSensorPage from "./pages/KetoneSensorPage";
import ReviewPaperPage from "./pages/ReviewPaperPage";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/nutritional_calculator"
            element={<NutritionalCalculatorPage />}
          />
          <Route
            path="/ketone_sensor"
            element={<KetoneSensorPage/>}
          />
          <Route
            path="/review_paper"
            element={<ReviewPaperPage />}
          />
        </Routes>

        <Footer />
      </Layout>
    </BrowserRouter>
  );
}