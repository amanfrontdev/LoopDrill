import React, { useState } from "react";
import Banner from "../components/Banner";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_eddvv36"; // Replace with your service ID
    const templateId = "template_msc2goq"; // Replace with your template ID
    const publicKey = "zcNyw-h7waBpGvyi9"; // Replace with your public key
    const templateParams = {
      from_name: name,
      from_email: email, // Use the email inputted by the user
      to_name: email, // Your email, where you want to receive the messages
      message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (res) => {
        console.log("SUCCESS!", res);
        setName("");
        setEmail("");
        setMessage("");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };
  return (
    <div>
      <Banner text="CONTACT US" />

      <section className="bg-white dark:bg-gray-900 ">
        <div className="py-8 lg:py-16 px-4 flex flex-col gap-y-10  mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form onSubmit={handleSubmit} className="emailForm  p-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              value={name}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor="subject"
              className="block my-4 mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              value={email}
              className="block my-4 p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Enter your mail "
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-white ">Message</label>
            <textarea
              name="message"
              value={message}
              className="block my-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="py-3 px-5 my-4 text-sm font-medium text-center  rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-white text-black"
              onClick={handleSubmit}
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
