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

const projects = [
  {
    title: "OperativApp Desarrollo Móvil",
    image: operativappThumbnail,
    modalDescription:
      "Aplicando los conocimientos adquiridos durante mis estudios, inicié el desarrollo de una aplicación móvil utilizando tecnologías modernas. Para este proyecto empleé React Native, un framework de JavaScript que permite crear aplicaciones compatibles con dispositivos Android e iOS. Además, integré Firebase como servicio backend para la gestión de la base de datos y otras funcionalidades en la nube.",
    liveLink: "https://github.com/Mez4/Operativapp",
    githubLink: "https://github.com/Mez4/Operativapp",
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
    title: "Primer proyecto con Three.js",
    image: atardecerThumbnail,
    modalDescription:
      "Actualmente curso Three.js Journey de Bruno Simon, un programa avanzado enfocado en gráficos 3D interactivos con Three.js. Me ha permitido explorar la integración entre desarrollo web y creatividad visual, aplicando lo aprendido en proyectos personales.",
    liveLink: "https://0x7444ff-2d-day-night.vercel.app/",
    githubLink: "https://github.com/Mez4?tab=repositories",
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
    title: "Colegio América versión Móvil",
    image: colegioThumbnail,
    modalDescription:
      "Este proyecto representó una experiencia muy enriquecedora a nivel profesional, ya que implicó un fuerte trabajo de campo y comunicación directa con el cliente para entender sus necesidades y traducirlas en soluciones funcionales. Formé parte del equipo de desarrollo dentro de una empresa del rubro, colaborando con tecnologías como HTML, CSS y JavaScript. Aunque el proyecto no se completó por motivos ajenos a lo técnico, me permitió desarrollar habilidades clave en trato con clientes y adaptación a requerimientos reales. Actualmente, puede consultarse la versión que entregué comparándola con la página actual del colegio.",
    liveLink: "https://meza-dev.vercel.app/assets/nosoyelcolegio/colegio.html",
    githubLink: "https://github.com/Mez4?tab=repositories",
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
    title: "Operativapp UI/UX",
    image: operativappUIUXThumbnail,
    modalDescription:
      "En este proyecto me encargué del diseño completo de la interfaz de usuario para una aplicación móvil. Utilicé Figma como herramienta principal, una plataforma de diseño y prototipado basada en la web que permite la colaboración en tiempo real. Al estar alojada en la nube, Figma facilita compartir el proyecto y trabajar en equipo de manera eficiente. Todo el desarrollo del diseño fue realizado de forma individual.",
    liveLink:
      "https://www.figma.com/proto/CZrIELddigqZXCJwT5MsTL/MESEROS-UX?node-id=1-2&starting-point-node-id=1%3A2",
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
];

function Portfolio() {
  return (
    <div className=" justify-center h-screen w-full bg-neutral-100 2xl:p-15">
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
