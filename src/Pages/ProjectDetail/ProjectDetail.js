import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Carousel } from "react-carousel-minimal";

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState({});
    const [technologies, setTechnologies] = useState([]);

    const {
        title,
        description,
        liveSite,
        serverSide,
        clientSide,
        img1,
        img2,
        img3,
        img4,
        img5,
    } = project;

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProject(data);
                setTechnologies(data.technologies);
            });
    }, []);

    const data = [
        {
            image: img1,
        },
        {
            image: img2,
        },
        {
            image: img3,
        },
        {
            image: img4,
        },
        {
            image: img5,
        },
    ];
    const slideNumberStyle = {
        fontSize: "20px",
        fontWeight: "bold",
    };

    return (
        <div className="pt-20 bg-gray-800 py-20">
            <div className="container mx-auto">
                <div style={{ textAlign: "center" }}>
                    <div
                        style={{
                            padding: "0 20px",
                        }}
                    >
                        <Carousel
                            data={data}
                            time={4000}
                            width="850px"
                            height="600px"
                            radius="10px"
                            slideNumber={true}
                            slideNumberStyle={slideNumberStyle}
                            automatic={true}
                            dots={true}
                            pauseIconColor="white"
                            pauseIconSize="40px"
                            slideBackgroundColor="darkgrey"
                            slideImageFit="contain"
                            style={{
                                textAlign: "center",
                                maxWidth: "850px",
                                maxHeight: "600px",
                                margin: "20px auto",
                            }}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 bg-blue-50 rounded-lg p-5">
                    <div>
                        <h1 className="text-3xl font-bold mb-4">{title}</h1>
                        <p className="text-lg">
                            {description} Visit client side github link to view
                            more details
                        </p>
                    </div>
                    <div>
                        <h2 className="font-bold text-2xl mb-3">
                            Technologies Used
                        </h2>
                        <div className="flex flex-wrap">
                            {technologies.map((t) => (
                                <div className="font-medium text-lg bg-green-500 px-2 py-1 m-1 rounded">
                                    {t}
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-wrap justify-around my-5">
                            <a
                                href={liveSite}
                                className="block bg-blue-600 rounded px-3 py-1 m-1 xl:m-0"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live Site
                            </a>
                            <a
                                href={clientSide}
                                className="block bg-blue-600 rounded px-3 py-1 m-1 xl:m-0"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Client Code
                            </a>
                            {serverSide ? (
                                <a
                                    href={serverSide}
                                    className="block bg-blue-600 rounded px-3 py-1 m-1 xl:m-0"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Server Code
                                </a>
                            ) : (
                                <span className="hidden"></span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
