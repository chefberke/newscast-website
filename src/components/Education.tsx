import ieu_logo from "../assets/ieu.png";
import { motion } from "framer-motion";

function Education() {
  return (
    <div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="flex-col items-center justify-center text-start mt-12">
          <div>
            <h2 className="font-semibold text-[1.2rem]">Education</h2>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center justify-center gap-4">
              <div>
                <img src={ieu_logo} width={50} height={50} />
              </div>
              <div>
                <div>
                  <h2 className="font-medium">İzmir University of Economics</h2>
                </div>
                <div>
                  <p className="text-gray-700">Associate's degree, Computer Programming</p>
                </div>
              </div>
            </div>
            <div className="text-gray-500">
              <p>2023 - present</p>
              <p>İzmir,Turkiye</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Education;
