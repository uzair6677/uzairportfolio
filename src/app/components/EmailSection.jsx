import React from "react";
import GIthubIcon from "../../../public/icons8-github.svg";
import linkedinIcon from "../../../public/icons8-linkedin.svg";
import Image from "next/image";
import Link from "next/link";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities. My inbox is always open — whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com" target="_blank">
            <Image src={GIthubIcon} alt="GitHub icon" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Image src={linkedinIcon} alt="LinkedIn icon" />
          </Link>
        </div>
      </div>

      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label htmlFor="email" className="text-white mb-2 block text-sm font-medium">
              Your email
            </label>
            <input
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
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-2 rounded hover:bg-blue-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
