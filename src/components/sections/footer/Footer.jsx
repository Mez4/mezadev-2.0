import React from "react";
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import cv from "@/assets/CV-Alejandro-Meza.pdf";

function Footer() {
  return (
    <footer className="w-full bg-neutral-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Redes sociales con iconos */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Mez4"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/meza.jsx/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://wa.me/528714128195?text=Hola%20Alejandro%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactarte"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>

        {/* Enlace de descarga */}
        <div>
          <a
            href={cv}
            download
            className="bg-violet-600 hover:bg-violet-500 text-white font-medium py-2 px-4 rounded-lg transition"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
