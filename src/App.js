import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { BankCode } from "./components/bank_code";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import ImagesComponent from "./components/images";
import { Loading } from "./components/Loading";

function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<ImagesComponent />} />
        <Route path="/bank_code" element={<BankCode />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
