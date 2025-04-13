import React from "react";
import avatar from "@/assets/images/avatar.png";
import { TechCard } from "./tech-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const techs = [
  { name: "Javascript", icon: "a" },
  { name: "React", icon: "b" },
  { name: "Angular", icon: "c" },
  { name: "CSS", icon: "d" },
  { name: "HTML", icon: "e" },
  { name: "Node.js", icon: "f" },
  { name: "Tailwind CSS", icon: "g" },
  { name: "Figma", icon: "h" },
  { name: "Git", icon: "i" },
  { name: "Github", icon: "j" },
  { name: "Vercel", icon: "k" },
  { name: "Firebase", icon: "m" },
];

function About() {
  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-neutral-100 justify-around flex-wrap overflow-x-hidden">
      <div className="flex xl:max-w-1/2 flex-wrap justify-center content-start pb-10">
        <div className="flex w-full justify-center h-1/2 p-20 mt-10">
          <img
            src={avatar}
            alt="Avatar de Alejandro Meza desarrollador web"
            className="rounded-full object-cover bg-neutral-200 md:w-1/2"
          />
        </div>
        <h1 className="font-sans font-bold text-5xl lg:text-6xl text-violet-600 w-full text-center p-5 text-shadow-lg/10">
          Alejandro Meza
        </h1>
        <p className="text-center text-base text-gray-700 lg:p-10 w-full m-10 lg:text-2xl lg:leading-10">
          Hola, soy Alejandro. Nací en el 98 y desde siempre me ha movido la
          curiosidad por entender cómo funcionan las cosas (y cómo hacer que se
          vean mejor). Me gusta aprender, crear y transformar ideas en algo
          visual, interactivo y funcional. Disfruto combinar lo técnico con lo
          estético, y me encanta cuando un proyecto no solo funciona bien, sino
          que también se siente bien. Este espacio lo hice con cariño para
          compartir lo que voy construyendo en el camino.
        </p>
      </div>
      <div className="pb-20 relative flex w-full xl:w-1/2 justify-around lg:flex-wrap content-around overflow-x-hidden">
        {/* Contenedores creados para hacer el efecto de los gradientes laterales */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-neutral-100 via-neutral-100/80 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-neutral-100 via-neutral-100/80 to-transparent pointer-events-none z-10" />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={2.5}
          speed={3000}
          allowTouchMove={false}
          breakpoints={{
            640: { slidesPerView: 4.5 },
            1024: { slidesPerView: 6.5 },
            1536: { slidesPerView: 6.5 },
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {techs.map((tech, index) => (
            <SwiperSlide key={index}>
              <TechCard icon={tech.icon} name={tech.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default About;
