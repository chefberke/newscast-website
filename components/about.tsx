import React from "react";
import CvButton from "@/components/cv-button";

function About() {
  return (
    <div>
      <div>
        <h2 className="text-xl font-medium">About</h2>
      </div>
      <div className="pt-7">
        <p className="font-light text-gray-200">
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
