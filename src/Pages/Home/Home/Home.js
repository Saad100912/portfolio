import React from "react";
import Navigation from "../../Shared/Navigation/Navigation";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <div className="bg-gray-800">
            <Navigation />
            <Header />
            <Projects />
            <About />
            <Contact />
        </div>
    );
};

export default Home;
