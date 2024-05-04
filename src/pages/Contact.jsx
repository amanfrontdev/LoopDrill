import React, { useState } from "react";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi"; // Importing email, location, and phone icons
import emailjs from "@emailjs/browser";
import Banner from "../components/Banner";

const Contact = () => {

  const contactDetails = [
    { icon: <FiMail />, text: "example@example.com" },
    { icon: <FiMapPin />, text: "123 Street, City, Country" },
    { icon: <FiPhone />, text: "+1234567890" },
  ];

  const [intialData, setInitialData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    subject: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setInitialData((preVal) => ({ ...preVal, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInitialData({
      name: "",
      phone: "",
      email: "",
      message: "",
      subject: ""
    })
  }

  return (
    <div>
      <Banner text="CONTACT US" />
      <section className="bg-DarkGray flex justify-center flex-wrap  ">
        <div className="py-8 lg:py-16 px-4 flex flex-col gap-y-10 max-w-screen-lg ">
          <p className="mb-8 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>

          <div className="flex flex-col lg:flex-row-reverse bg-gray-200 shadow-black rounded-lg shadow-md">

            <div className="flex flex-col py-10 w-full lg:w-1/3 bg-gradient-to-r from-purple-600 to-blue-600 px-10 gap-5 md:gap-x-24 flex-wrap rounded-t-lg lg:rounded-r-lg">
              <div className="">
                <div className="text-white text-2xl font-bold">Contact Information</div>
                <p className="text-white text-sm my-5">Welcome to LoopDrill, Feel free to contact us!</p>
              </div>
              {contactDetails.map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      key={index}
                      className="flex items-center bg-slate-100 p-2 rounded-lg"
                    >
                      {item.icon}
                      <span className="text-black  ml-2">{item.text}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            <form
              action="https://formspree.io/f/xgegdnnr"
              method="POST"
              className="emailForm p-4 w-full lg:w-2/3">
              <div className="flex gap-x-4 flex-col gap-4 sm:flex-row mb-4 ">
                <div className="flex-1 ">
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-black dark:text-gray-300" >
                    Name
                  </label>
                  <input onChange={handleInput} value={intialData.name} required type="name" name="name" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light max-[670px]:w-full " placeholder="Your Name" />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-sm font-medium text-black dark:text-gray-300" htmlFor="email" >
                    Email
                  </label>
                  <input onChange={handleInput} value={intialData.email} required type="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Email" />
                </div>
              </div>

              <div className="flex gap-x-4 mb-4 flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-black dark:text-gray-300" >
                    Phone
                  </label>
                  <input onChange={handleInput} value={intialData.phone} required type="tel" name="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Your Phone" />
                </div>
                <div className="flex-1">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black dark:text-gray-300" >
                    Subject
                  </label>
                  <input onChange={handleInput} value={intialData.subject} required type="subject" name="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Subject" />
                </div>
              </div>
              <label className="text-black">Message</label>
              <textarea onChange={handleInput} value={intialData.message} required name="message" className="block my-4 p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Message" />
              <button
                type="submit"
                className="py-3 px-5 my-4 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                onSubmit={handleSubmit}
              >
                Send message
              </button>
            </form>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
