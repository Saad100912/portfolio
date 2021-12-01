import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <div className="bg-gray-800">
            <Header />
            <Projects />
            <About />
            <Contact />
        </div>
    );
};

export default Home;
