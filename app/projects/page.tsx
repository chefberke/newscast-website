import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

function Projects() {
  const projects = [
    {
      title: "Üniversite Değerlendir",
      alt: "university rate app",
      description: `
        - A platform for anonymously rating and reviewing universities in Turkey.
        - Users can leave comments and ratings to share their experiences.
        - Built with a modern UI/UX for a smooth and intuitive experience.
        - Integrated with a real-time database for instant updates.
      `,
      image: "./unidegerlendir.svg",
      github: "https://github.com/yourusername/unidegerlendir",
      liveDemo: "https://unidegerlendir.com",
    },
    {
      title: "Spotiwrap",
      alt: "spotify tracks app",
      description: `
        - An open-source Spotify Wrapped alternative for analyzing top tracks, artists, and genres.
        - Provides an interactive and visually appealing breakdown of listening habits.
        - Optimized for performance with seamless API integration.
        - Designed to be lightweight and responsive across devices.
      `,
      image: "./spotiwrap.svg",
      github: "https://github.com/yourusername/spotiwrap",
      liveDemo: "https://spotiwrap.com",
    },
    {
      title: "Lumi Kanban",
      alt: "kanban board",
      description: `
        - A simple yet powerful task management tool for organizing work efficiently.
        - Features drag-and-drop functionality for seamless task movement.
        - Built with a dynamic UI that adapts to different workflows.
        - Supports real-time updates for a collaborative experience.
      `,
      image: "./lumi-kanban.svg",
      github: "https://github.com/yourusername/lumi-kanban",
      liveDemo: "https://lumi-kanban.com",
    },
    {
      title: "git.cow",
      alt: "github profile analytics",
      description: `
        - A developer tool for analyzing GitHub activity and project metrics.
        - Visualizes repositories, commits, and contributions with insightful graphs.
        - Provides detailed insights to track open-source engagement.
        - Optimized for efficiency with smooth animations and transitions.
      `,
      image: "./git-cow.svg",
      github: "https://github.com/yourusername/git-cow",
      liveDemo: "https://git-cow.com",
    },
  ];

  return (
    <div>
      <div>
        <h2 className="text-xl font-medium">Projects</h2>
      </div>
      <div className="pt-7">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col items-center sm:items-start border-t border-neutral-900 pb-8"
          >
            <div className="w-full pt-8">
              <h3 className="font-normal text-white">{project.title}</h3>
              <p>
                {project.description.split("\n").map((line, index) => (
                  <span
                    key={index}
                    className="font-light text-gray-400 text-sm"
                  >
                    {line}
                    <br />
                  </span>
                ))}
              </p>

              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-neutral-800 text-[0.9rem] text-neutral-200 rounded py-0.5 px-2 flex items-center gap-2 hover:opacity-85 transition-all"
                >
                  <FaGithub />
                  Source
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  className="bg-neutral-800 text-[0.9rem] text-neutral-200 rounded py-0.5 px-2 flex items-center gap-2 hover:opacity-85 transition-all"
                >
                  <TbWorld />
                  Website
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
