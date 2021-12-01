import React from "react";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
    const { img1, title, _id } = project;

    return (
        <div className="p-5 bg-blue-300 rounded-lg">
            <img
                src={img1}
                alt=""
                className="p-1 rounded-lg transition duration-500 ease-in-out transform  hover:scale-110"
            />
            <h2 className="font-bold text-3xl my-3">{title}</h2>
            <div className="flex justify-around flex-wrap">
                <Link
                    to={`/projects/${_id}`}
                    className="bg-green-600 px-3 py-1 rounded"
                >
                    Details
                </Link>
            </div>
        </div>
    );
};

export default Project;
