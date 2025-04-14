import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCard({ title, image, modalDescription, liveLink, githubLink }) {
  const [isOpen, setIsOpen] = useState(false);
  const backdropRef = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (backdropRef.current && e.target === backdropRef.current) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent group-hover:from-black/60 transition duration-200" />
        <div className="absolute bottom-0 p-5 text-white">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-sm mt-2 text-neutral-300">
            haz click para más detalles...
          </p>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={backdropRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-neutral-200 p-6 rounded-xl max-w-lg w-full shadow-xl relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-4 text-neutral-500 hover:text-red-500 text-2xl font-bold"
              >
                &times;
              </button>

              <h2 className="text-2xl font-bold mb-4 text-violet-500 drop-shadow-lg">
                {title}
              </h2>
              <img src={image} alt={title} className="rounded-lg mb-4" />
              <p className="text-neutral-700 mb-4">{modalDescription}</p>

              <div className="flex gap-4 mt-4">
                {liveLink && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-violet-500 text-white font-semibold hover:bg-violet-700 transition"
                  >
                    Ver Proyecto
                  </a>
                )}
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg border border-violet-500 text-violet-500 font-semibold hover:bg-violet-100 transition"
                  >
                    Ver Código
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export { ProjectCard };
