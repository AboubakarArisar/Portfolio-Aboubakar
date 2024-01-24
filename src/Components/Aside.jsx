import React from "react";
import { Link } from "react-router-dom";
const Aside = () => {
  return (
    <aside className="w-[250px] xsm:hidden md:block h-screen mx-5 mb-5 mt-5 bg-black flex flex-col rounded">
      <div className="flex flex-col justify-center items-center h-[100px] ">
        <Link
          className="text-[#8B8A91] flex gap-2 transform transition-all hover:translate-y-2"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-home"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Home
        </Link>
      </div>
      <div className="flex flex-col justify-start items-center p-5 ">
        <h2 className="text-[#8B8A91] ">Socials</h2>
        <div className="flex justify-center items-center flex-col gap-4 mt-6">
          <a
            href="https://github.com/AboubakarArisar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B8A91] flex  gap-2 transform transition-all hover:translate-y-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2a9d8f"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-home"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            Github
          </a>
          <a
            href="https://www.instagram.com/aboubakarisar05/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B8A91] flex gap-2 transform transition-all hover:translate-y-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b5179e"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-home"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
            </svg>
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@pindaricoders"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B8A91] flex gap-2 transform transition-all hover:translate-y-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#e63946"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-home"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
              <path d="m10 15 5-3-5-3z"></path>
            </svg>
            Youtube
          </a>
          <a
            href="https://www.linkedin.com/in/aboubakar-arisar-825412264"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8B8A91] flex gap-2 transform transition-all hover:translate-y-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0277b5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-home"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            Linkedin
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
