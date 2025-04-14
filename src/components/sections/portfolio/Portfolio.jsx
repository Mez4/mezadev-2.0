import React from "react";
import { ProjectCard } from "./project-card";
import image from "@/assets/images/operativappux.png";

const projects = [
  {
    title: "Landing Page",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
    modalDescription:
      "Este proyecto es una landing page creada con React y Tailwind. Tiene diseño adaptativo, animaciones con Framer Motion y se despliega en Vercel.",
    liveLink: "https://landing.vercel.app",
    githubLink: "https://github.com/usuario/landing-page",
  },
  {
    title: "E-commerce",
    image:
      "https://images.unsplash.com/photo-1556742400-b5b7c512f1b4?auto=format&fit=crop&w=800&q=80",
    modalDescription:
      "Proyecto de tienda online con carrito, pasarela de pagos y panel de administrador. Hecho con React, Node y Firebase.",
    liveLink: "https://ecommerce.vercel.app",
    githubLink: "https://github.com/usuario/ecommerce",
  },
  {
    title: "Blog Personal",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    modalDescription:
      "Este blog está hecho con Next.js, Tailwind y Markdown para las publicaciones. Incluye SEO y temas oscuro/claro.",
    liveLink: "https://blog.vercel.app",
    githubLink: "https://github.com/usuario/blog",
  },
  {
    title: "Portfolio",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    modalDescription:
      "Portfolio personal creado con React y animaciones con Framer Motion. Optimizado para mobile y con un diseño limpio.",
    liveLink: "https://miportfolio.vercel.app",
    githubLink: "https://github.com/usuario/portfolio",
  },
  {
    title: "Dashboard",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    modalDescription:
      "Dashboard interactivo hecho con React, Recharts y Tailwind. Incluye login, filtros dinámicos y exportación de datos.",
    liveLink: "https://dashboard.vercel.app",
    githubLink: "https://github.com/usuario/dashboard",
  },
  {
    title: "Galería de Arte",
    image:
      "https://images.unsplash.com/photo-1549887534-1722d99c44f5?auto=format&fit=crop&w=800&q=80",
    modalDescription:
      "Proyecto de galería online donde se muestran obras de arte con scroll infinito, animaciones suaves y filtros por categoría.",
    liveLink: "https://galeria.vercel.app",
    githubLink: "https://github.com/usuario/galeria",
  },
];

function Portfolio() {
  return (
    <div className=" justify-center h-screen w-full bg-neutral-100 2xl:p-15">
      <div className="bg-gradient-to-r from-[#4568DC] to-[#B06AB3] min-h-full flex items-start justify-center 2xl:rounded-4xl inset-shadow-sm 2xl:inset-shadow-gray-900 flex-wrap p-5 md:p-20">
        <h1 className="text-center 2xl:text-left text-white w-full text-4xl 2xl:text-6xl font-bold mb-10 drop-shadow-lg">
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
