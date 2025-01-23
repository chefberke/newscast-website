import { motion } from "framer-motion";
import Links from "./Links";
import Stack from "./Stack";

import gitcow from "../assets/git-cow.png";
import spotiwrap from "../assets/spotiwrap.png";
import unidegerlendir from "../assets/unidegerlendir.png";
import memorybuddy from "../assets/memorybuddy.png";

function Projects() {
  return (
    <div>
      <div className="mt-12">
        <div className="flex-col items-center justify-center text-start mt-10">
          <div>
            <h2 className="font-semibold text-[1.2rem]">Projects</h2>
          </div>
          <div className="pt-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="grid grid-cols-2 grid-rows-1 gap-6 max-sm:grid-cols-1">
                {/* Üniversite Değerlendir */}
                <div className="h-[28.5rem] border border-gray-300 rounded-md transition-all hover:shadow-2xl">
                  <div className="w-full h-[12rem]">
                    <img
                      src={unidegerlendir}
                      className="rounded-t-md object-cover h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-[16.5rem] p-4">
                    <div>
                      <h2 className="text-gray-950 font-medium text-[1.1rem]">
                        Üniversite Değerlendir
                      </h2>
                      <p className="text-gray-700 text-[0.8rem]">
                        university rate app
                      </p>
                    </div>
                    <p className="text-[0.8rem] text-gray-500">
                      Üniversite Değerlendir allows users to anonymously rate
                      and comment on universities in Izmir.
                    </p>
                    <div>
                      <div className="flex gap-2 mb-2">
                        <Stack technology={"Next.js"} />
                        <Stack technology={"Supabase"} />
                        <Stack technology={"Typescript"} />
                      </div>
                      <div className="flex gap-2">
                        <Stack technology={"Redux toolkit"} />
                        <Stack technology={"TailwindCSS"} />
                      </div>
                    </div>
                    <Links
                      source={
                        "https://github.com/chefberke/universite-degerlendir"
                      }
                      website={"https://universite-degerlendir.vercel.app/"}
                    />
                  </div>
                </div>

                {/* Git Cow */}
                <div className="h-[28.5rem] border border-gray-300 rounded-md transition-all hover:shadow-2xl">
                  <div className="w-full h-[12rem]">
                    <img
                      src={gitcow}
                      className="rounded-t-md object-cover h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-[16.5rem] p-4">
                    <div>
                      <h2 className="text-gray-950 font-medium text-[1.1rem]">
                        git.cow
                      </h2>
                      <p className="text-gray-700 text-[0.8rem]">
                        github profile analytics
                      </p>
                    </div>
                    <p className="text-[0.8rem] text-gray-500">
                      Git Cow is a sophisticated web tool designed for
                      developers who want a more efficient way to analyze their
                      GitHub activity and project metrics.
                    </p>
                    <div>
                      <div className="flex gap-2 mb-2">
                        <Stack technology={"Next.js"} />
                        <Stack technology={"Supabase"} />
                        <Stack technology={"Typescript"} />
                      </div>
                      <div className="flex gap-2">
                        <Stack technology={"TailwindCSS"} />
                        <Stack technology={"Redux toolkit"} />
                        <Stack technology={"Motion"} />
                      </div>
                    </div>
                    <Links
                      source={"https://github.com/lumi-work/git.cow"}
                      website={"https://git-cow.vercel.app/"}
                    />
                  </div>
                </div>

                {/* Spotiwrap */}
                <div className="h-[28.5rem] border border-gray-300 rounded-md transition-all hover:shadow-2xl">
                  <div className="w-full h-[12rem]">
                    <img
                      src={spotiwrap}
                      className="rounded-t-md object-cover h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-[16.5rem] p-4">
                    <div>
                      <h2 className="text-gray-950 font-medium text-[1.1rem]">
                        Spotiwrap
                      </h2>
                      <p className="text-gray-700 text-[0.8rem]">
                        spotify tracks app
                      </p>
                    </div>
                    <p className="text-[0.8rem] text-gray-500">
                      Open-source Spotify Wrapped app showcasing your top
                      tracks, artists, and genres in an interactive interface.
                    </p>
                    <div>
                      <div className="flex gap-2 mb-2">
                        <Stack technology={"Next.js"} />
                        <Stack technology={"Typescript"} />
                        <Stack technology={"Supabase"} />
                      </div>
                      <div className="flex gap-2">
                        <Stack technology={"Zustand"} />
                        <Stack technology={"TailwindCSS"} />
                      </div>
                    </div>
                    <Links
                      source={"https://github.com/lumi-work/spotiwrap"}
                      website={"/"}
                    />
                  </div>
                </div>

                {/* Memory Buddy */}
                <div className="h-[28.5rem] border border-gray-300 rounded-md transition-all hover:shadow-2xl">
                  <div className="w-full h-[12rem]">
                    <img
                      src={memorybuddy}
                      className="rounded-t-md object-cover h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-[16.5rem] p-4">
                    <div>
                      <h2 className="text-gray-950 font-medium text-[1.1rem]">
                        Memory Buddy
                      </h2>
                      <p className="text-gray-700 text-[0.8rem]">memory app</p>
                    </div>
                    <p className="text-[0.8rem] text-gray-500">
                      Capture the moments that matter, cherish the memories
                      forever. Our app lets you preserve and share your life’s
                      beautiful experiences.
                    </p>
                    <div>
                      <div className="flex gap-2 mb-2">
                        <Stack technology={"Next.js"} />
                        <Stack technology={"Typescript"} />
                      </div>
                      <div className="flex gap-2">
                        <Stack technology={"TailwindCSS"} />
                      </div>
                    </div>
                    <Links
                      source={"https://github.com/chefberke/memory-buddy"}
                      website={"https://memory-buddy.vercel.app/"}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
