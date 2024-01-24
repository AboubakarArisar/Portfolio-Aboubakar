import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Pindari Coders website",
      technologies: "React, React Hook Form, Javascript , Tailwind css",
      link: "https://github.com/AboubakarArisar/Pindari-Coders-Website",
    },
    {
      name: "Projects-and-payments",
      technologies:
        "React js, React Hook Form, Redux, Express js, Mongo db,  Tailwind CSS",
      link: "https://github.com/AboubakarArisar/Pindari-Coders-Website",
    },
    {
      name: "Amazon Clone",
      technologies: "NodeJs, Express, Mongoose, React Hook Form,  Tailwind CSS",
      link: "https://github.com/AboubakarArisar/Pindari-Coders-Website",
    },
  ];

  return (
    <>
      <div className=" xsm:w-[100vw] xsm:p-5 md:w-[80vw]">
        <div className="text-xl w-full font-medium text-zinc-200 mt-5">
          Projects
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-5 mt-5 pr-5">
          {projects.map((project, index) => (
            <a key={index} target="_blank" href={project.link}>
              <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
                <img
                  alt={project.name}
                  loading="lazy"
                  width="700"
                  height="700"
                  decoding="async"
                  data-nimg="1"
                  className="aspect-video object-cover"
                  style={{ color: "transparent" }}
                  src={`/pindari.png`}
                />
                <div className="flex flex-col px-4 py-2 h-24">
                  <div className="flex font-bold">{project.name}</div>
                  <div className="flex text-info text-xs">
                    {project.technologies}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
