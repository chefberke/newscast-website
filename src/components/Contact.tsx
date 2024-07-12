import { motion } from "framer-motion";
import ContactImg from "../assets/chefberke2.png";

function Projects() {
  return (
    <div>
      <div>
        <div className="flex-col items-center justify-center text-start mt-12">
          <div>
            <h2 className="font-semibold text-[1.2rem]">Contact</h2>
          </div>

          <div>
            <div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <p className="text-start text-gray-700 text-[1rem] pt-2 pr-4">
                  You can contact me via{" "}
                  <span className="underline text-gray-600">
                    {" "}
                    <a href="mailto:berkekanber@gmail.com" target="_blank">
                      email
                    </a>{" "}
                  </span>{" "}
                  or{" "}
                  <span className="underline text-gray-600">
                    <a href="https://www.linkedin.com/in/berke-kanber-942392265/" target="_blank">
                      LinkedIn
                    </a>{" "}
                  </span>
                  . If you'd like to chat and get to know each other, you can grab some time{" "}
                  <span className="underline text-gray-600">
                    <a href="https://calendly.com/berkekanber/30min" target="_blank">
                      on my calendar
                    </a>
                  </span>{" "}
                  to schedule a meeting. I look forward to meeting you and exchanging ideas!
                </p>
                <div className="flex items-center justify-center mt-[2rem]">
                  <img src={ContactImg} width={200} height={200} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
