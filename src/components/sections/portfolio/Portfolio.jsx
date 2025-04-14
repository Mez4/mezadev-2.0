import React from "react";
import { ProjectCard } from "./project-card";
import operativappThumbnail from "@/assets/images/operativapp.png";
import lobusThumbnail from "@/assets/images/lobus.png";
import mezaDevThumbnail from "@/assets/images/mezadev.png";
import colegioThumbnail from "@/assets/images/colegio-america.png";
import operativappUIUXThumbnail from "@/assets/images/operativapp-ux.png";
import coderhouseThumbnail from "@/assets/images/coderhouse.png";
import threejsJourneyThumbnail from "@/assets/images/threejs.png";
import atardecerThumbnail from "@/assets/images/atardecer.png";
import mezadevUIUXThumbnail from "@/assets/images/mezadev-wireframe.png";
import brasaThumbnail from "@/assets/images/brasa.png";
import ossoThumbnail from "@/assets/images/osso.png";
import mezadevV2Thumbnail from "@/assets/images/mezadev-v2.png";

const projects = [
  {
    title: "Primer proyecto con Three.js",
    image: atardecerThumbnail,
    modalDescription:
      "Actualmente curso Three.js Journey de Bruno Simon, un programa avanzado enfocado en gráficos 3D interactivos con Three.js. Me ha permitido explorar la integración entre desarrollo web y creatividad visual, aplicando lo aprendido en proyectos personales.",
    liveLink: "https://0x7444ff-2d-day-night.vercel.app/",
    githubLink: "https://github.com/Mez4?tab=repositories",
  },
  {
    title: "Three.js Journey",
    image: threejsJourneyThumbnail,
    modalDescription:
      "Actualmente curso Three.js Journey de Bruno Simon, un programa avanzado enfocado en gráficos 3D interactivos con Three.js. Me ha permitido explorar la integración entre desarrollo web y creatividad visual, aplicando lo aprendido en proyectos personales.",
    liveLink: "https://threejs-journey.com/",
    githubLink: "https://github.com/Mez4?tab=repositories",
  },
  {
    title: "Operativapp UI/UX",
    image: operativappUIUXThumbnail,
    modalDescription:
      "Diseñé por completo la interfaz de usuario de una aplicación móvil utilizando Figma como herramienta principal. Gracias a sus funciones colaborativas en la nube, pude gestionar el diseño de forma organizada y eficiente. El proyecto fue desarrollado de manera individual, desde la idea inicial hasta el prototipo final.",
    liveLink:
      "https://www.figma.com/proto/CZrIELddigqZXCJwT5MsTL/MESEROS-UX?node-id=1-2&starting-point-node-id=1%3A2",
    githubLink: "https://github.com/Mez4?tab=repositories",
  },
  {
    title: "E-commerce LOBUS",
    image: lobusThumbnail,
    modalDescription:
      "En el proyecto LOBUS colaboré en el desarrollo de su sitio web como parte de un equipo dentro de una empresa de desarrollo web. Participé utilizando tecnologías como HTML, CSS, JavaScript y PHP, contribuyendo a la creación de una experiencia funcional y visualmente sólida.",
    liveLink: "https://lobus.com.mx/password",
    githubLink: "https://github.com/Mez4/lobus",
  },
  {
    title: "Colegio América versión Móvil",
    image: colegioThumbnail,
    modalDescription:
      "Este proyecto me permitió trabajar de cerca con el cliente, entendiendo sus necesidades y plasmándolas en código. Formé parte de un equipo de desarrollo utilizando HTML, CSS y JavaScript. Aunque no se finalizó por razones externas, fortaleció mis habilidades de comunicación y adaptación a requerimientos reales. ",
    liveLink: "https://meza-dev.vercel.app/assets/nosoyelcolegio/colegio.html",
    githubLink: "https://github.com/Mez4?tab=repositories",
  },
  {
    title: "Brasa Desarrollos",
    image: brasaThumbnail,
    modalDescription:
      "En el 2023 fui contratado de forma independiente para desarrollar el sitio web de las Residencias en Nubium de Brasa Desarrollos. Implementé una interfaz atractiva y responsiva, destacando los modelos residenciales y amenidades del fraccionamiento Cirrus. Utilicé tecnologías como HTML, CSS y JavaScript.",
    liveLink: "https://brasa.com.mx/",
    githubLink: "https://github.com/Mez4?tab=repositories",
  },
  {
    title: "OperativApp Desarrollo Móvil",
    image: operativappThumbnail,
    modalDescription:
      "Aplicando los conocimientos adquiridos durante mis estudios, inicié el desarrollo de una aplicación móvil utilizando tecnologías modernas. Para este proyecto empleé React Native, un framework de JavaScript que permite crear aplicaciones compatibles con dispositivos Android e iOS. Además, integré Firebase como servicio backend para la gestión de la base de datos y otras funcionalidades en la nube.",
    liveLink: "https://github.com/Mez4/Operativapp",
    githubLink: "https://github.com/Mez4/Operativapp",
  },
  {
    title: "MezaDev-v1",
    image: mezaDevThumbnail,
    modalDescription:
      "Desarrollé la primera versión de mi portafolio personal con el objetivo de mostrar los proyectos en los que he participado. Utilicé tecnologías como HTML, JavaScript y Bootstrap para construir una interfaz responsiva y funcional. Planeo seguir actualizándolo de forma continua, incorporando nuevas funcionalidades y mejoras visuales conforme avance en mi carrera.",
    liveLink: "https://meza-dev.vercel.app/",
    githubLink: "https://github.com/Mez4/MezaDev",
  },

  {
    title: "CoderHouse",
    image: coderhouseThumbnail,
    modalDescription:
      "A lo largo de mi formación académica y profesional he completado diversos cursos y diplomados enfocados en el desarrollo y la programación. Uno de ellos fue a través de Coderhouse, una de las plataformas de formación más reconocidas en Latinoamérica.",
    liveLink: "https://www.coderhouse.com/mx/",
    githubLink: "https://github.com/Mez4?tab=repositories",
  },
  {
    title: "MezaDev-v2 Wireframe",
    image: mezadevUIUXThumbnail,
    modalDescription:
      "En este proyecto diseñé el wireframe de la segunda versión de mi portafolio personal utilizando Figma. Me enfoqué en mejorar la estructura, la experiencia de usuario y la organización del contenido, con una base más sólida para futuras implementaciones. Este trabajo me permitió planificar de forma visual y estratégica el rediseño de mi portafolio, priorizando usabilidad y escalabilidad.",
    liveLink:
      "https://www.figma.com/design/ei6J7EcfIzkgnbvRpYhRAm/Wireframe---Portfolio---Mezadev?node-id=1140-6414&p=f&t=XfHl4t0dKhgtIiYx-0",
    githubLink: "https://github.com/Mez4/",
  },
  {
    title: "Osso Restaurante",
    image: ossoThumbnail,
    modalDescription:
      "En 2019, fui contratado de forma independiente para colaborar en el desarrollo del sitio web de Osso, un restaurante de carnes. En ese entonces, Osso contaba con una sola sede y comenzaba a consolidarse como una propuesta innovadora en la escena gastronómica local. Mi trabajo consistió en implementar una interfaz funcional y atractiva que reflejara la identidad del restaurante y facilitara la experiencia del usuario.",
    liveLink:
      "https://www.figma.com/design/ei6J7EcfIzkgnbvRpYhRAm/Wireframe---Portfolio---Mezadev?node-id=1140-6414&p=f&t=XfHl4t0dKhgtIiYx-0",
    githubLink: "https://github.com/Mez4/",
  },
  {
    title: "MezaDev-v2",
    image: mezadevV2Thumbnail,
    modalDescription:
      "La segunda versión de mi portafolio personal fue diseñada y desarrollada desde cero con un enfoque más sólido en UI/UX y estructura. Implementé mejoras en la navegación, organización del contenido y presentación de proyectos. Para su desarrollo utilicé React y Tailwind CSS, logrando una base moderna, escalable y fácil de mantener.",
    liveLink: "https://mezadev-2-0.vercel.app/",
    githubLink: "https://github.com/Mez4/mezadev-2.0",
  },
];

function Portfolio() {
  return (
    <div className=" justify-center w-full bg-neutral-100 2xl:p-15 min-h-full">
      <div className="bg-gradient-to-r from-[#4568DC] to-[#B06AB3] min-h-full flex items-start justify-center 2xl:rounded-4xl inset-shadow-sm 2xl:inset-shadow-gray-900 flex-wrap p-5 md:p-20">
        <h1 className="text-center 2xl:text-left text-white w-full text-5xl lg:text-6xl font-bold mb-10 text-shadow-lg/50">
          Proyectos
        </h1>
        <div className=" w-full grid gap-6 md:gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              modalDescription={project.modalDescription}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
