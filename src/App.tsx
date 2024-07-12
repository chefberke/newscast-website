import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      "(min-width: 640px)": function () {
        gsap.to("#smooth-content", {
          y: -window.innerHeight,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: "#smooth-wraper",
            start: "top top",
            end: "+=500%",
            scrub: 1,
            pin: true,
            markers: false,
          },
        });
      },

      "(max-width: 639px)": function () {
        gsap.killTweensOf("#smooth-content");

        gsap.set("#smooth-content", { clearProps: "all" });
      },
    });
  }, []);

  return (
    <div className="w-full h-auto bg-white text-gray-950 max-w-sm:h-[250vh]">
      <div className="flex items-center justify-center">
        <div className="max-w-[40rem] w-[85%]">
          <div id="smooth-wraper" className="container">
            <div id="smooth-content" className="mt-36">
              <About />
              <Projects />
              <Education />
              <Contact />
              <p className="flex items-center justify-center text-center mt-20 text-[2rem]">*</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
