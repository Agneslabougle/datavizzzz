import React, { useState, useEffect } from "react";

const FlourishEmbed = () => {
  const [is3D, setIs3D] = useState(true); // Estado para cambiar entre 2D y 3D

  // Cargar el script de Flourish solo una vez
  useEffect(() => {
    // Verificar si el script ya está en el documento
    const scriptTag = document.querySelector('script[src="https://public.flourish.studio/resources/embed.js"]');
    
    if (!scriptTag) {
      // Si no está, lo agregamos
      const script = document.createElement("script");
      script.src = "https://public.flourish.studio/resources/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Cambiar entre 2D y 3D
  const toggleMap = () => {
    setIs3D((prev) => !prev);
  };

  // Cambia el URL del iframe cuando cambia el flag de is3D
  useEffect(() => {
    if (document.querySelector(".flourish-embed iframe") != null) {
      let storyID = "2741288"; // Story ID para el mapa 3D

      if (!is3D) {
        storyID = "2752893"; // Nuevo Story ID para el mapa 2D
      }

      document.querySelector(".flourish-embed iframe").src = `https://flo.uri.sh/story/${storyID}/embed?auto=1`;
    }
  }, [is3D]);

  return (
    <div
      id="flourish-container"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <button
        onClick={toggleMap}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "#172554",
          color: "#ffffff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        Cambiar a {is3D ? "2D" : "3D"}
      </button>

      <div
        className="flourish-embed-container"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        {is3D ? (
          // Mapa 3D
          <div className="flourish-embed" data-src="story/2741288" style={{ width: "100%", height: "100%" }}>
            <noscript>
              <img
                src="https://public.flourish.studio/story/2741288/thumbnail"
                width="100%"
                alt="Mapa 3D"
              />
            </noscript>
          </div>
        ) : (
          // Mapa 2D 
          <div
            className="flourish-embed"
            data-src="story/2752893"
            style={{ width: "100%", height: "100%" }}
          >
            <noscript>
              <img
                src="https://public.flourish.studio/story/2752893/thumbnail"
                width="100%"
                alt="Mapa 2D"
              />
            </noscript>
          </div>
        )}
      </div>
    </div>
  );
};

export default FlourishEmbed;
