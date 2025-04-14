'use client';
import React, { useState } from "react";
import GIthubIcon from "../../../public/icons8-github.svg";
import linkedinIcon from "../../../public/icons8-linkedin.svg";
import Image from "next/image";
import Link from "next/link";

const EmailSection = () => {
  const [emailSubmitted,setEmailSubmitted]=useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      console.log(resData);

      if (response.status === 200) {
        console.log('Message sent successfully');
        setEmailSubmitted(true)
      } else {
        console.error('Message sending failed');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities. My inbox is always open — whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/uzair6677" target="_blank">
            <Image src={GIthubIcon} alt="GitHub icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/uzair-tariq-3472b1339/" target="_blank">
            <Image src={linkedinIcon} alt="LinkedIn icon" />
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="text-white mb-2 block text-sm font-medium">
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
            <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
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
            <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
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
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-2 rounded transition-all"
          >
            Send Message
          </button>
        </form>
        {emailSubmitted&&(<p className="text-green-500 text-sm mt-2">email submitted succeessfully</p>)}
      </div>
    </section>
  );
};

export default EmailSection;
