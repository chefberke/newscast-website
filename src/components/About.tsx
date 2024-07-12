import WordPullUp from "./magicui/Word-pull-up";
import chefberke from "../assets/chefberke1.png";

import { motion } from "framer-motion";
import Resume from "./Resume";

function About() {
  return (
    <div>
      <div className="flex-col items-start justify-start h-full w-full">
        <div className="flex items-start justify-start">
          <img src={chefberke} width={200} height={200} />
        </div>
        <div className="pt-6">
          <h1>
            <WordPullUp className="text-gray-950 font-semibold text-[3.2rem] text-start" words="Hi, I'm Berke 👋" />
          </h1>
          <p className="text-[1.4rem] text-gray-800">Frontend Developer / Engineer</p>
        </div>

        <div className="flex-col items-center justify-center text-start mt-6">
          <div>
            <h2 className="font-semibold text-[1.2rem]">About</h2>
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div>
              <p className="text-start text-gray-700 text-[1rem] pt-2">
                I'm Berke Kanber, a frontend developer / engineer based in İzmir.
              </p>
              <p className="text-start text-gray-700 text-[1rem] pt-2">
                I enjoy working with various tools and technologies to create seamless user experiences. Currently, I'm
                a first-year Computer Programming student at{" "}
                <a href="https://www.ieu.edu.tr/tr" target="_blank" className="underline text-gray-600">
                  İzmir University of Economics.
                </a>
              </p>
            </div>
            <div>
              <Resume />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
