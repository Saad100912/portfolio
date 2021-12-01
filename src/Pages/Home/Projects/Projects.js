import React, { useEffect, useState } from "react";
import Project from "./Project";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("https://sleepy-garden-01616.herokuapp.com/projects")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
            });
    }, []);

    return (
        <div id="projects" className="container mx-auto">
            <h2 className="text-5xl font-bold text-center py-16 text-gray-400">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project) => (
                    <Project key={project._id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
