import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import "./HomeScreen.css";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";

function HomeScreen() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div
            className="home-screen"
            style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "white" : "",
            }}
        >
            <Navbar />
            <Intro />
            <Services />
            <Experience />
            <Works />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default HomeScreen