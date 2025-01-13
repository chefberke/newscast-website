import { Analytics } from "@vercel/analytics/react";

import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full h-full bg-white text-gray-950">
      <div className="flex items-center justify-center z-10">
        <div className="max-w-[40rem] w-[85%]">
          <div>
            <div id="smooth-content" className="mt-36">
              <Analytics />
              <About />
              <Projects />
              <Education />
              <Contact />
              <p className="flex items-center justify-center text-center mt-20 mb-20 text-[2rem]">
                *
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
