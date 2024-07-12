import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

function Links({ source, website }: any) {
  return (
    <div>
      <div className="flex gap-2 mt-2">
        <a
          href={source}
          target="_blank"
          className="text-[0.9rem] bg-gray-950 text-white rounded h-[1.6rem] px-2 flex items-center gap-2 hover:opacity-75"
        >
          <FaGithub />
          Source
        </a>
        <a
          href={website}
          target="_blank"
          className="text-[0.9rem] bg-gray-950 text-white rounded h-[1.6rem] px-2 flex items-center gap-2 hover:opacity-75"
        >
          <TbWorld />
          Website
        </a>
      </div>
    </div>
  );
}

export default Links;
