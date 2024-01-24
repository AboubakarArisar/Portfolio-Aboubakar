import React from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-black w-full h-full">
        <div className="flex justify-center items-center p-5 ">
          <button
            onClick={() => navigate("/")}
            className="px-2  w-24 py-3 text-white text-xl rounded bg-green-500 hover:bg-red-600"
          >
            Home
          </button>
        </div>
        <div className=" p-5  grid xsm:grid-cols-1 md:grid-cols-2">
          <div className=" rounded flex justify-center items-center flex-col">
            <p className="font-medium text-xl text-[#8B8A91]">Contact Me</p>

            <h1 className="mt-2 text-5xl font-semibold text-[#8B8A91] shadow-lg">
              Get in touch
            </h1>

            <p className="mt-3 text-[#8B8A91]">
              I would love to hear from you.
            </p>
          </div>

          <div className="flex flex-col gap-2 p-5">
            <div className="">
              <span className="inline-block p-3 text-[#8B8A91] rounded-full bg-blue-100/80 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="red"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className=" text-lg font-medium text-[#8B8A91]">Email</h2>

              <p className="mt-2 text-lg text-[#8B8A91]">
                aboubakar.arisarsahab@gmail.com
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-[#8B8A91] rounded-full bg-blue-100/80">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="red"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <h2 className=" text-lg font-medium text-[#8B8A91]">Location</h2>

              <p className="mt-2 text-xl text-[#8B8A91]">
                Sukkur IBA University
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-[#8B8A91] rounded-full bg-blue-100/80 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="red"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className=" text-lg font-medium text-[#8B8A91]">Phone</h2>
              <p className="mt-2 text-lg text-[#8B8A91]">+92348-3624912</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center p-5">
          <iframe
            className="rounded"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56511.832009074824!2d68.833654!3d27.71761045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3935d4e60abe0af7%3A0xcd579d655a1c3ad4!2sSukkur%2C%20Sindh!5e0!3m2!1sen!2s!4v1706111666923!5m2!1sen!2s"
            width="800"
            height="600"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
