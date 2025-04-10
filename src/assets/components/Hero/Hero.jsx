import React from "react";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { FlipWords } from "./flip-words";
const words = ["   Creative", "Front-end"];

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
    <div>
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
      >
        <div className="text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold z-10 font-sans dark:text-neutral-900">
          Alejandro Meza <br />
          <FlipWords
            words={words}
            duration={1000}
            className="dark:text-gray-200"
          />
          Developer
        </div>
      </BackgroundGradientAnimation>
      <div className="h-screen"></div>
    </div>
  );
}

export default Hero;
