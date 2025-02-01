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
      github: "https://github.com/chefberke/universite-degerlendir",
      liveDemo: "https://universite-degerlendir.vercel.app",
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
      github: "https://github.com/lumi-work/spotiwrap",
      liveDemo: "https://spoti-wrap.vercel.app/",
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
      github: "https://github.com/lumi-work/git.cow",
      liveDemo: "https://git-cow.vercel.app",
    },
    {
      title: "Lumi UI",
      alt: "ui component library",
      description: `
        - A modern, customizable UI component library designed for React and Next.js projects.
        - Provides a collection of reusable components to streamline development.
        - Built with performance and accessibility in mind for a seamless user experience.
        - Designed to be easily integrated into projects with minimal setup.
      `,
      github: "https://github.com/lumi-work/lumi.ui",
      liveDemo: "https://github.com/lumi-work/lumi.ui",
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
      github: "https://github.com/lumi-work/lumi-kanban",
      liveDemo: "https://github.com/lumi-work/lumi-kanban",
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
            className="flex flex-col items-center sm:items-start border-t border-neutral-900/50 pb-8 hover:bg-neutral-900/30 transition-all p-4 -mx-4"
          >
            <div className="w-full pt-8">
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-medium text-lg text-white">
                  {project.title}
                </h3>
                <span className="text-xs text-neutral-400 bg-neutral-800/50 px-2 py-0.5 rounded-full">
                  {project.alt}
                </span>
              </div>
              <p className="mb-6">
                {project.description.split("\n").map((line, index) => (
                  <span
                    key={index}
                    className="font-light text-gray-400 text-sm block leading-relaxed"
                  >
                    {line}
                  </span>
                ))}
              </p>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  className="bg-neutral-800 text-[0.9rem] text-neutral-200 rounded-md py-0.5 px-2 flex items-center gap-2 hover:bg-neutral-700 transition-all"
                >
                  <FaGithub />
                  Source
                </a>
                {project.liveDemo && project.liveDemo !== project.github && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    className="bg-neutral-800 text-[0.9rem] text-neutral-200 rounded-md py-0.5 px-2 flex items-center gap-2 hover:bg-neutral-700 transition-all"
                  >
                    <TbWorld />
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
