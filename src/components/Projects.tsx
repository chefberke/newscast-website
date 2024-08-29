import { motion } from "framer-motion";
import Links from "./Links";
import Stack from "./Stack";

import yourweathers from "../assets/yourweathers-2.png";
import noteapp from "../assets/noteapp.png";
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
                <div className="h-[27rem] border border-gray-300 rounded-md  transition-all hover:shadow-2xl max-sm:h-[28.5rem]">
                  <div className="w-full">
                    <img
                      src={unidegerlendir}
                      className="rounded-t-md"
                    />
                  </div>
                  <div className="mt-2 ml-2 mr-4 fle-col">
                    <div>
                      <h2 className="text-gray-950 font-medium text-[1.1rem]">
                        Üniversite Değerlendir
                      </h2>
                    </div>
                    <div>
                      <p className="text-gray-700 text-[0.8rem]">
                        {" "}
                        university rate app
                      </p>
                    </div>
                    <div className="h-[4rem] flex items-center justify-center">
                      <p className="text-[0.8rem] text-gray-500 pt-1">
                        Üniversite Değerlendir allows users to
                        anonymously rate and comment on universities
                        in Izmir.
                      </p>
                    </div>
                    <div className="flex-col">
                      <div className="flex gap-2">
                        <Stack technology={"Next.js"} />
                        <Stack technology={"Supabase"} />
                        <Stack technology={"Typescript"} />
                      </div>
                      <div className="flex gap-2">
                        <Stack technology={"Redux toolkit"} />
                        <Stack technology={"TailwindCSS"} />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Links
                        source={
                          "https://github.com/chefberke/universite-degerlendir"
                        }
                        website={
                          "https://universite-degerlendir.vercel.app/"
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[27rem] border border-gray-300 rounded-md transition-all hover:shadow-2xl max-sm:h-[28.5rem]">
                  <div className="w-full">
                    <img src={memorybuddy} className="rounded-t-md" />
                  </div>
                  <div className="mt-2 ml-2 mr-4 fle-col">
                    <div>
                      <h2 className="text-gray-950 font-medium text-[1.1rem]">
                        Memory Buddy
                      </h2>
                    </div>
                    <div>
                      <p className="text-gray-700 text-[0.8rem]">
                        {" "}
                        memory app
                      </p>
                    </div>
                    <div className="h-[5rem] flex items-center justify-center">
                      <p className="text-[0.8rem] text-gray-500 pt-1">
                        Capture the moments that matter, cherish the
                        memories forever. Our app lets you preserve
                        and share your lifes beautiful experiences.
                      </p>
                    </div>
                    <div className="flex-col">
                      <div className="flex gap-2">
                        <Stack technology={"Next.js"} />
                        <Stack technology={"Typescript"} />
                      </div>
                      <div className="flex gap-2">
                        <Stack technology={"TailwindCSS"} />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Links
                        source={
                          "https://github.com/chefberke/memory-buddy"
                        }
                        website={"https://memory-buddy.vercel.app/"}
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[27rem] border border-gray-300 rounded-md  transition-all hover:shadow-2xl max-sm:h-[28.5rem]">
                  <div className="w-full">
                    <img src={noteapp} className="rounded-t-md" />
                  </div>
                  <div className="mt-2 ml-2 mr-4 fle-col">
                    <div>
                      <h2 className="text-gray-950 font-medium text-[1.1rem]">
                        Notes App
                      </h2>
                    </div>
                    <div>
                      <p className="text-gray-700 text-[0.8rem]">
                        {" "}
                        note app
                      </p>
                    </div>
                    <div className="h-[4rem] flex items-center justify-center">
                      <p className="text-[0.8rem] text-gray-500 pt-1">
                        The note-taking application features the
                        ability to search notes, with options to
                        categorize them for better organization.
                      </p>
                    </div>
                    <div className="flex-col">
                      <div className="flex gap-2">
                        <Stack technology={"Next.js"} />
                        <Stack technology={"Typescript"} />
                        <Stack technology={"Redux toolkit"} />
                      </div>
                      <div className="flex gap-2">
                        <Stack technology={"TailwindCSS"} />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Links
                        source={
                          "https://github.com/chefberke/notes-app"
                        }
                        website={"https://apps-notes.netlify.app"}
                      />
                    </div>
                  </div>
                </div>
                <div className="h-[27rem] border border-gray-300 rounded-md transition-all hover:shadow-2xl max-sm:h-[28.5rem]">
                  <div className="w-full">
                    <img
                      src={yourweathers}
                      className="rounded-t-md"
                    />
                  </div>
                  <div className="mt-2 ml-2 mr-4 fle-col">
                    <div>
                      <h2 className="text-gray-950 font-medium text-[1.1rem]">
                        Your Weather
                      </h2>
                    </div>
                    <div>
                      <p className="text-gray-700 text-[0.8rem]">
                        {" "}
                        weather app
                      </p>
                    </div>
                    <div className="h-[5rem] flex items-center justify-center">
                      <p className="text-[0.8rem] text-gray-500 pt-1">
                        The app lets users search cities and view
                        real-time temperature, feels-like temperature,
                        humidity, wind, and hourly forecasts.
                      </p>
                    </div>
                    <div className="flex-col">
                      <div className="flex gap-2">
                        <Stack technology={"Typescript"} />
                        <Stack technology={"React"} />
                        <Stack technology={"Framer-motion"} />
                      </div>
                      <div className="flex gap-2">
                        <Stack technology={"TailwindCSS"} />
                        <Stack technology={"Redux toolkit"} />
                        <Stack technology={"Axios"} />
                      </div>
                    </div>
                    <div className="mt-4">
                      <Links
                        source={
                          "https://github.com/chefberke/your-weather-app"
                        }
                        website={"https://yourweathers.netlify.app/"}
                      />
                    </div>
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
