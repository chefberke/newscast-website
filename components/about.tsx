import React from "react";
import CvButton from "@/components/cv-button";
import Image from "next/image";
import Avatar from "../public/chefberke.png";

function About() {
  return (
    <div>
      <div>
        <h2 className="text-xl font-medium">About</h2>
      </div>
      <div className="pt-7">
        <div className="flex items-center gap-2">
          <div>
            <Image src={Avatar} width={60} height={60} alt="chefberke-avatar" />
          </div>
          <div className="flex flex-col">
            <h2 className="font-medium">Berke Kanber</h2>
            <p className="font-light text-neutral-300">Software Developer</p>
          </div>
        </div>
        <p className="font-light text-gray-200 pt-7">
          Hi, I&apos;m Berke Kanber, a passionate software developer based in
          İzmir, Turkey. Currently, I&apos;m pursuing my second year in Computer
          Programming at İzmir University of Economics . I love exploring and
          working with a variety of tools and technologies to build seamless and
          impactful user experiences. My goal is to continuously grow as a
          developer while creating innovative solutions that make a difference.
        </p>
      </div>
      <div className="pt-5">
        <CvButton />
      </div>
    </div>
  );
}

export default About;
