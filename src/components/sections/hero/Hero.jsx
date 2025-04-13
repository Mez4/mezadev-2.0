import React from "react";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { FlipWords } from "./flip-words";
const words = ["Creative Developer", "Front-end Developer", "UI/UX Designer"];

const gradientStart = "rgb(0, 0, 0)";
const gradientEnd = "rgb(165, 16, 224)";
const firstColor = "255, 60, 56"; //rojo
const secondColor = "255, 210, 63"; //amarillo
const thirdColor = "6, 174, 213"; //celeste
const fourthColor = "108, 224, 41"; //verde
const fifthColor = "255, 1, 251"; //gris
const pointerColor = "71, 49, 152"; //blanco
// const pointerColor = "255, 210, 63"; //amarillo
const size = "50%";
function Hero() {
  return (
    <div className="overflow-x-hidden">
      <BackgroundGradientAnimation
        gradientBackgroundStart={gradientStart}
        gradientBackgroundEnd={gradientEnd}
        firstColor={firstColor}
        secondColor={secondColor}
        thirdColor={thirdColor}
        fourthColor={fourthColor}
        fifthColor={fifthColor}
        pointerColor={pointerColor}
        size={size}
        containerClassName="shadow-[inset_0px_-80px_200px_-10px_#000000]"
      >
        <div className="text-2xl text-center md:text-4xl lg:text-7xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold z-10 font-sans dark:text-neutral-900 lg:leading-20">
          Alejandro Meza <br />
          <FlipWords
            words={words}
            duration={1500}
            className="dark:text-neutral-200 text-shadow-lg/30 text-center"
          />
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
}

export default Hero;
