import React from "react";

const Project = ({ project }) => {
    const { img1, title, _id, liveSite, clientSide, serverSide } = project;

    return (
        <div className="p-5 bg-blue-300 rounded-lg">
            <img
                src={img1}
                alt=""
                className="p-1 rounded-lg transition duration-500 ease-in-out transform  hover:scale-110"
            />
            <h2 className="font-bold text-3xl my-3">{title}</h2>
            <div className="flex justify-around flex-wrap">
                <a
                    href={liveSite}
                    className="block bg-blue-600 rounded px-3 py-1 m-1 xl:m-0"
                >
                    Live Site
                </a>
                <a
                    href={clientSide}
                    className="block bg-blue-600 rounded px-3 py-1 m-1 xl:m-0"
                >
                    Client Code
                </a>
                {serverSide ? (
                    <a
                        href={serverSide}
                        className="block bg-blue-600 rounded px-3 py-1 m-1 xl:m-0"
                    >
                        Server Code
                    </a>
                ) : (
                    <span className="hidden"></span>
                )}
            </div>
        </div>
    );
};

export default Project;
