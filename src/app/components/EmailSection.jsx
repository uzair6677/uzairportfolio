"use client";
import React, { useState } from "react";
import GIthubIcon from "../../../public/icons8-github.svg";
import linkedinIcon from "../../../public/icons8-linkedin.svg";
import { TbBrandWhatsappFilled } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      console.log(resData);

      if (response.status === 200) {
        console.log("Message sent successfully");
        setEmailSubmitted(true);
      } else {
        console.error("Message sending failed");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <>
     <p className="text-white text-2xl text-center">Contact US</p>
    <section
      className="grid md:grid-cols-2 my-3 md:my-2 py-6 gap-4 px-6 "
      id="contact"
    >
     
      <div className="flex flex-col justify-around py-4 ">
       <div className="">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities. My inbox is always open —
          whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p></div>
       <div className=" py-4"> <span className="text-white flex flex-row items-center  gap-3 text-lg">
          <TbBrandWhatsappFilled className="text-green-700 text-2xl" />
          <p>923435366677</p>
        </span></div>

        <div className="py-4">
          <a href='my-cv.pdf' download><button className="text-white hover:bg-red-700 bg-red-500 py-3 px-2 rounded-xl ">
            Download cv
          </button></a>
        </div>
        <div className="socials flex flex-row gap-2 py-4">
          <Link href="https://github.com/uzair6677" target="_blank">
            <Image src={GIthubIcon} alt="GitHub icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/uzair-tariq-3472b1339/"
            target="_blank"
          >
            <Image src={linkedinIcon} alt="LinkedIn icon" />
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white mb-2 block text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] w-full p-2.5 placeholder-[#9CA2A9] text-gray-100 text-sm rounded"
              placeholder="jacob@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] w-full p-2.5 placeholder-[#9CA2A9] text-gray-100 text-sm rounded"
              placeholder="Just saying hi"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="bg-[#18191E] border border-[#33353F] w-full p-2.5 placeholder-[#9CA2A9] text-gray-100 text-sm rounded"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-medium px-6 py-2 rounded-4xl transition-all"
          >
            Send Message
          </button>
        </form>
        {emailSubmitted && (
          <p className="text-green-500 text-sm mt-2">
            email submitted succeessfully
          </p>
        )}
      </div>
    </section>
    </>
  );
};

export default EmailSection;
