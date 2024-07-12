import { IoMdDownload } from "react-icons/io";
import resume from "../assets/berkekanber-resume-updated.pdf";

function Resume() {
  return (
    <div className="pt-6">
      <button className="bg-gray-200 rounded px-4 h-[2rem] font-medium">
        <a href={resume} target="_blank" className="flex items-center justify-center gap-2">
          <IoMdDownload />
          Download CV
        </a>
      </button>
    </div>
  );
}

export default Resume;
