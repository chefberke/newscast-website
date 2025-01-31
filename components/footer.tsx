import React from "react";
import LiveClock from "@/components/live-clock";
import { MdOutlineArrowOutward } from "react-icons/md";

function Footer() {
  return (
    <div className="mt-12">
      <div className="flex items-center gap-4 text-gray-300 font-light text-[16px]">
        <a
          href={"https://github.com/chefberke"}
          target="_blank"
          className="flex items-center gap-1 hover:opacity-90 transition-all"
        >
          <MdOutlineArrowOutward />
          github
        </a>
        <a
          href={"https://x.com/chef_berke"}
          target="_blank"
          className="flex items-center gap-1 hover:opacity-90 transition-all"
        >
          <MdOutlineArrowOutward />
          twitter
        </a>
        <a
          href={"https://www.twitch.tv/chefberkesu"}
          target="_blank"
          className="flex items-center gap-1 hover:opacity-90 transition-all"
        >
          <MdOutlineArrowOutward />
          twitch
        </a>
      </div>
      <div className="flex items-center gap-4 pt-6">
        <div>
          <h3 className="font-light text-sm text-gray-400">
            © 2025 MIT Licensed
          </h3>
        </div>
        <div>
          <LiveClock />
        </div>
      </div>
    </div>
  );
}

export default Footer;
