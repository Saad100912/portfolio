import React from "react";

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "Bootstrap",
    "Tailwind",
    "Material UI",
    "ExpressJS",
    "Heroku",
    "Github",
    "React Router",
];

const About = () => {
    return (
        <div id="about" className="container mx-auto py-16">
            <h2 className="text-5xl font-bold text-center py-16 text-gray-400">
                About Me
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="flex justify-center items-center">
                    <img
                        src="https://i.ibb.co/jZztQxX/pro-pic-1.png"
                        alt=""
                        className="w-2/4"
                    />
                </div>
                <div className="bg-white rounded-lg p-5">
                    <h4 className="text-lg font-medium my-1">
                        Name:
                        <span className="font-normal">
                            {" "}
                            Abdur Rahman Ibne Mijan
                        </span>
                    </h4>

                    <h4 className="text-lg font-medium my-1">
                        LinkedIn:{" "}
                        <a
                            href="https://www.linkedin.com/in/saad100912/"
                            className="text-blue-500 font-normal"
                        >
                            Click here
                        </a>
                    </h4>
                    <h4 className="text-lg font-medium my-1">
                        Github:{" "}
                        <a
                            href="https://github.com/Saad100912"
                            className="text-blue-500 font-normal"
                        >
                            Click Here
                        </a>
                    </h4>
                    <h4 className="text-lg font-medium my-1">Skills:</h4>
                    <div className="flex flex-wrap my-1">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="bg-green-400 px-2 py-1 rounded m-1"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
