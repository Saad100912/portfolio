import React from "react";

const Contact = () => {
    return (
        <div id="contact" className="container mx-auto text-center py-16">
            <h2 className="text-5xl font-bold text-center py-16 text-gray-400">
                Get In Touch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                    <form
                        action="https://formsubmit.co/arsaad.2016@gmail.com"
                        method="POST"
                    >
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full border-2 border-blue-500 rounded p-2 my-3"
                            placeholder="Your Name*"
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full border-2 border-blue-500 rounded p-2 my-3"
                            placeholder="Email Address*"
                        />
                        <input
                            type="text"
                            name="_subject"
                            required
                            className="w-full border-2 border-blue-500 rounded p-2 my-3"
                            placeholder="Subject*"
                        />
                        <textarea
                            name="message"
                            rows="5"
                            className="w-full border-2 border-blue-500 rounded p-2 my-3"
                            placeholder="Write Your Message*"
                        />
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-green-700 px-3 py-1 rounded text-white font-bold"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className="bg-white rounded p-5 text-left">
                    <h1 className="text-3xl font-medium my-5">
                        Leave Me A Message
                    </h1>
                    <p className="">
                        If you have any questions, message or suggestion to me
                        then you can send it in this contact email. Or you can
                        directly send an Email via the form.
                    </p>
                    <h4 className="text-lg font-medium mt-4 mb-1">
                        Email Address
                    </h4>
                    <h4 className="text-lg">arsaad.2016@gmail.com</h4>
                    <h4 className="text-lg font-medium mt-4 mb-1">Phone:</h4>
                    <h4 className="text-lg">+8801730661025</h4>
                </div>
            </div>
        </div>
    );
};

export default Contact;
