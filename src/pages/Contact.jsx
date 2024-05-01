import React, { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi"; // Importing email, location, and phone icons
import emailjs from "@emailjs/browser";
import Banner from "../components/Banner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const contactDetails = [
    { icon: <FiMail />, text: "example@example.com" },
    { icon: <FiMapPin />, text: "123 Street, City, Country" },
    { icon: <FiPhone />, text: "+1234567890" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_eddvv36"; // Replace with your service ID
    const templateId = "template_msc2goq"; // Replace with your template ID
    const publicKey = "zcNyw-h7waBpGvyi9"; // Replace with your public key
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: email,
      subject: subject,
      message: message,
      phone: phone,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (res) => {
        console.log("SUCCESS!", res);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setPhone("");
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div>
      <Banner text="CONTACT US" />
      <section className="bg-white dark:bg-gray-900 flex justify-center flex-wrap  ">
        <div className="py-8 lg:py-16 px-4 flex flex-col gap-y-10 max-w-screen-md ">
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <div className="flex flex-row justify-center items-center gap-5 md:gap-x-24 flex-wrap">
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-200 p-2 rounded-lg"
              >
                {item.icon}
                <span className="text-black  ml-2">{item.text}</span>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="emailForm p-4">
            <div className="flex gap-x-4 flex-col gap-4 sm:flex-row mb-4 ">
              <div className="flex-1 ">
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
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light max-[670px]:w-full "
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-x-4 mb-4 flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="user_phone"
                  value={phone}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Your Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="email_subject"
                  value={subject}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
            </div>
            <label className="text-white">Message</label>
            <textarea
              name="message"
              value={message}
              className="block my-4 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Your Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="py-3 px-5 my-4 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-white text-black"
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
