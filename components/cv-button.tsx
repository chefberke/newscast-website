import React from "react";
import { MdArrowOutward } from "react-icons/md";

function CvButton() {
  return (
    <div className="bg-neutral-700 rounded-md w-fit px-2.5 py-1 hover:opacity-85 transition-all">
      <a href="#" className="font-normal text-sm flex items-center gap-2">
        Open CV <MdArrowOutward className="text-lg" />
      </a>
    </div>
  );
}

export default CvButton;
