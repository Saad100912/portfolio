import React from "react";

const Header = () => {
    return (
        <div id="home">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-32 pt-20">
                    <div className="flex flex-col justify-center ">
                        <h2 className="text-4xl font-bold text-white my-3">
                            Abdur Rahman Ibne Mijan
                        </h2>
                        <h4 className="text-2xl font-medium text-white mb-5">
                            MERN Stack Web Developer
                        </h4>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Iste quas voluptas cum iusto sit dicta quo
                            omnis delectus nemo tenetur, repellendus autem
                            repudiandae, beatae quaerat porro? Sapiente, eveniet
                            nam? Ratione.
                        </p>
                        <div className="my-5">
                            <a
                                className="bg-green-600 px-2 py-1 rounded text-white inline-block"
                                href="https://drive.google.com/file/d/1vCnu-G4AIuebbxXxugQSBpkRn6RqcHNN/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img
                            src="https://i.ibb.co/Stv29Y4/pro-pic-2.png"
                            alt="Profile"
                            className="h-3/4"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
