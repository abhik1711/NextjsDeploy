import { FaLocationArrow } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa"; // Import an icon for Resume/CV

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  const handleResumeClick = () => {
    // Open CV from local storage
    const cvUrl = "/FinalCV.pdf"; // Path to your CV file in the public directory
    window.open(cvUrl, "_blank"); // Open CV in a new tab
  };

  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10 space-x-4"> {/* Added space-x-4 for spacing */}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Innovative Web Development Portfolio 
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Building Sophisticated and Modern Web Experience"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! My name is Abhinav Karade.<br></br> I'm a passionate Software Developer specializing in crafting elegant user interfaces and robust applications.
          </p>

          <div className="flex space-x-4"> {/* Added space-x-4 for button spacing */}
            <a href="#about">
              <MagicButton
                title="Personal Info"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a onClick={handleResumeClick} role="button" tabIndex={0}>
              <MagicButton
                title="Resume/CV"
                icon={<FaFileAlt />} // Icon for Resume/CV
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
