import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </Layout>
    </BrowserRouter>
  );
}