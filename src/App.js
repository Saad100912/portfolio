import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import ProjectDetail from "./Pages/ProjectDetail/ProjectDetail";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<ProjectDetail />}>
                    <Route path=":id" element={<ProjectDetail />} />
                </Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
