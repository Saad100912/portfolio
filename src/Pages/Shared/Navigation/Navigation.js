import React from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const navigation = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "About Me", href: "#about" },
    { name: "Contact Me", href: "#contact" },
];

const Navigation = () => {
    return (
        <Disclosure as="nav" className="bg-gray-900 w-full fixed z-10">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-24">
                        <div className="relative flex items-center justify-between h-20">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 items-center hidden sm:block">
                                    <Link to="/home">
                                        <img
                                            src="https://i.ibb.co/njMJbTB/portfolio-logo.png"
                                            className="w-3/4"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="font-bold text-xl text-white block px-3"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <div className="flex-shrink-0 flex items-center mb-5">
                                <Link to="/home">
                                    <img
                                        src="https://i.ibb.co/njMJbTB/portfolio-logo.png"
                                        className="w-3/4"
                                        alt=""
                                    />
                                </Link>
                            </div>
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block font-bold text-xl text-white my-5"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navigation;
