import React from "react";

const ScrollSection = () => {
  return (
    <section
      className="relative h-[50vh] overflow-x-scroll snap-x snap-mandatory mt-2"
    >
   
      <div
        className="flex h-full gap-0"
        style={{
          width: "400%", // 4 videos, cada uno ocupando el 100% de su contenedor
          marginBottom: "10rem"
        }}
      >
   
        <div
          className="snap-start flex-shrink-0 flex flex-col items-center"
          style={{ width: "20%" }} 
        >
          <video
            className="w-full h-full object-cover"
            playsInline
            autoPlay
            loop
            muted
          >
            <source src="/videos/reciclaar.mp4" type="video/mp4" />
          </video>
        </div>

        
        <div
          className="snap-start flex-shrink-0 flex flex-row"
          style={{
            width: "25%",
            height: "100%",
            backgroundColor: "#172554",
            padding: "1rem",
          }}
        >
          
          <div className="flex flex-col justify-start">
            <h3 className="text-2xl font-bold mb-3 text-white mt-20 ml-20">Recursos Relacionados</h3>
            <ul className="space-y-3 text-lg ml-20">
              <li>
                <a
                  href="https://www.greenpeace.org/international/publication/62121/30x30-from-global-ocean-treaty-to-protection-at-sea/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition"
                >
                  30×30: From Global Ocean Treaty to Protection at Sea
                </a>
              </li>
              <li>
                <a
                  href="https://wwfwhales.org/protecting-blue-corridors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition"
                >
                  Protecting Blue Corridors
                </a>
              </li>
              <li>
                <a
                  href="https://unfoundation.org/event/the-mpa-guide-a-framework-to-achieve-global-goals-for-the-ocean/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition"
                >
                  The MPA Guide
                </a>
              </li>
              <li>
                <a
                  href="https://only.one/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition"
                >
                  Behind the planet-wide mission to protect 30% of the ocean by 2030
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=O0hqCvbNWG4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-orange-400 transition"
                >
                  Mission Blue: The Next Ten Years
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center ml-60">
            <img src="/pez.jpg" alt="pez" style={{ width: "350px", height: "auto" }} />
          </div>
        </div>

        
        <div
          className="snap-start flex-shrink-0 flex flex-row"
          style={{
            width: "25%",
            height: "100%",
            backgroundColor: "#0F162D",
            padding: "1rem",
          }}
        >
          <div className="flex flex-col justify-start">
          <h3 className="text-2xl font-bold mb-3 text-white mt-10 ml-20">Agnes Labougle y Magdalena Ovejero</h3>
          <h3 className="text-xl mb-3 text-white mt-3 ml-20"style={{ textDecoration: "underline", textUnderlineOffset: "5px" }}> Bibliografía</h3>
          <ul className="space-y-3 text-lg text-white ml-20">
            <li>
              <a
                href="https://theoceancleanup.com/ocean-plastic-pollution-explained/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                Ocean Plastic Pollution Explained
              </a>
            </li>
            <li>
              <a
                href="https://theoceancleanup.com/great-pacific-garbage-patch/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                Great Pacific Garbage Patch
              </a>
            </li>
            <li>
              <a
                href="https://www.scmp.com/magazines/post-magazine/long-reads/article/3219522/why-asia-needs-wake-plastic-waste-our-oceans-and-how-banning-single-use-items-would-be-vital-step"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                Why Asia Needs to Wake Up to Plastic Waste
              </a>
            </li>
            <li>
              <a
                href="https://www.iberdrola.com/sostenibilidad/isla-de-plastico-pacifico-septimo-continente"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                Isla de Plástico en el Pacífico
              </a>
            </li>
            <li>
              <a
                href="https://www.behance.net/gallery/73898555/Infografia-Isla-de-Basura-del-Ocano-Pacifico"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition"
              >
                Infografía Isla de Basura del Océano Pacífico
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
