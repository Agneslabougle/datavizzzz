import { useEffect } from "react";
import ScrollSection from './ScrollSection';


export default function Intro() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://public.flourish.studio/resources/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="body--container" className="flex items-center flex-col mr-1 mb-30">
            <h1 style={{ marginLeft: "370px", alignSelf: "flex-start" }}>
                <span>% de plásticos que terminan en el mar</span>
            </h1>
            <h1 style={{ marginLeft: "370px", alignSelf: "flex-start" }}>
                <span>provenientes de países de Asia</span>
            </h1>

            <div className="flourish-embed flourish-chart" data-src="visualisation/20278743" style={{ marginBottom: "40px", width: "53%" }}>
                
            </div>

            <p>
                La diferencia en contaminación plástica entre estos países se debe a factores como la infraestructura de manejo de residuos, políticas de reciclaje y su geografía. <span className="text-orange-500 font-bold">Filipinas</span>, al ser un <span className="text-orange-500 font-bold">país insular con limitada gestión de residuos</span>, permite que más plástico llegue al océano. <span className="text-orange-500 font-bold">China</span> e <span className="text-orange-500 font-bold">India</span>, aunque tienen más población, han implementado mejores políticas de reciclaje, mientras que <span className="text-orange-500 font-bold">Malasia</span>, como receptor de desechos internacionales, también contribuye, aunque en menor proporción.
            </p>

            <h1 style={{ marginTop: "100px", marginLeft: "370px", alignSelf: "flex-start" }}>
                El Gran Parche de Basura del Pacífico
            </h1>
            <p>
                Como fue mencionado antes, el Gran Parche de Basura del Pacífico es una gigantesca acumulación de residuos plásticos que se encuentra entre Hawái y California, cubriendo una extensión de <span className="text-orange-500 font-bold">1.6 millones de kilómetros cuadrados</span>. Esta masa flotante alberga alrededor de 80,000 toneladas de plástico, siendo el 80% de estos residuos plásticos de un solo uso que no se degradan y que han permanecido atrapados en el océano por décadas, acumulándose por las corrientes marinas.
            </p>
            

            <video playsInline autoPlay loop muted style={{ width: "50%" }}>
                <source src="/videos/mapafranciaaa.mp4" type="video/mp4" /> </video>
    
             <p style={{ marginTop: "20px", marginLeft: "370px", alignSelf: "flex-start" }}>
                <span className="font-bold">Componentes de la Isla de Plástico</span>
            </p>

            <div className="flourish-embed flourish-hierarchy flourish-large" data-src="visualisation/20277693" style={{ marginBottom: "40px" }}>
                <noscript>
                    <img src="https://public.flourish.studio/visualisation/20277693/thumbnail" width="100%" alt="hierarchy visualization" />
                </noscript>
            </div>
              

            <p>
                El problema se intensifica debido a los residuos plásticos que fluyen desde múltiples fuentes, entre ellas varios países asiáticos que aportan una parte considerable de desechos plásticos al océano. Las corrientes marinas arrastran estos materiales y otros restos acumulados desde hace décadas, formando un inmenso <span className="text-orange-500 font-bold">vórtice de basura</span> que afecta tanto a la vida marina como a la calidad del agua en esta vasta área del Pacífico. Además, algunos estudios señalan que los restos de materiales de pruebas nucleares realizadas en el Pacífico tras la Segunda Guerra Mundial, y en particular de la bomba nuclear en Japón, también han añadido residuos al océano que, arrastrados por las corrientes, se suman a este vórtice de plásticos en el Pacífico.
            </p>

            

            <img src="/tres.png" width="70%" alt="fotitostres" />

            <blockquote className="italic border-l-4 border-gray-300 pl-4 text-gray-600 mx-10 my-6">
             "El agua y la tierra, los dos elementos esenciales de los que depende la vida, se han convertido en basureros mundiales."
             <br />
             <span className="font-bold not-italic text-black">Jacques-Yves Cousteau, oceanógrafo.</span>
             </blockquote>

            <p>
                El <span className="text-orange-500 font-bold">impacto en la vida marina es devastador</span>, afectando a más de 1 millón de aves marinas y 100,000 mamíferos marinos que mueren cada año debido a la ingestión de plásticos o a enredos en ellos. Estos desechos se descomponen en <span className="text-orange-500 font-bold">microplásticos</span> que ingresan en la cadena alimentaria, amenazando no solo la biodiversidad del océano, sino también la salud humana a través del consumo de mariscos y otros productos marinos contaminados. La isla esta compuesta por los siguientes tipos de plasticos:
            </p>
            
            
                <img src="/miniplaastico.png" width="55%" alt="minigrafico" />
           
           

           <p>El Gran Parche de Basura del Pacífico es un recordatorio urgente de la necesidad de reducir el consumo de plásticos y mejorar la gestión de residuos para evitar que el océano siga siendo un vertedero en expansión.</p>

           <h1 style={{ marginTop: "100px", marginLeft: "370px", alignSelf: "flex-start" }}>
                <span>Proteger los océanos </span>
            </h1>
            <p>
  La lucha contra la <span className="text-orange-500 font-bold">contaminación plástica</span> requiere tanto <span className="text-orange-500 font-bold">acciones individuales</span> como <span className="text-orange-500 font-bold">compromisos a nivel nacional</span>. Cada persona puede contribuir adoptando <span className="text-orange-500 font-bold">hábitos más sostenibles</span>, como reducir el uso de plásticos de un solo uso y reciclar de manera responsable. Sin embargo, estos esfuerzos deben complementarse con políticas nacionales que promuevan <span className="text-orange-500 font-bold">regulaciones estrictas</span>, incentivos para el uso de materiales alternativos y mejoras en la gestión de residuos. Solo mediante una combinación de <span className="text-orange-500 font-bold">esfuerzos individuales</span> y <span className="text-orange-500 font-bold">medidas colectivas</span> podemos enfrentar esta crisis y proteger los <span className="text-orange-500 font-bold">océanos</span> para las futuras generaciones.
</p>

<div className="flourish-embed flourish-pictogram" data-src="visualisation/20381447">
  <noscript>
    <img src="https://public.flourish.studio/visualisation/20381447/thumbnail" width="100%" alt="pictogram visualization" />
  </noscript>
</div>

<p>
  Dichas maneras de reducir la <span className="text-orange-500 font-bold">contaminación oceánica</span> no solo son <span className="text-orange-500 font-bold">esfuerzos individuales y nacionales </span> , sino también estrategias que están siendo adoptadas por países como Filipinas, India, Malasia y China. Estas naciones, que enfrentan desafíos significativos debido a su alta contribución a la contaminación plástica, han comenzado a implementar medidas para mitigar su impacto. A través de <span className="text-orange-500 font-bold">regulaciones más estrictas</span>, mejoras en la gestión de residuos y campañas para reducir el uso de plásticos, estos países están dando pasos importantes hacia un <span className="text-orange-500 font-bold">futuro más sostenible</span>. La siguiente visualización destaca cómo estas iniciativas se están llevando a cabo en las regiones más afectadas.
</p>

<div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px", marginBottom: "30px", marginTop: "30px" }}>
            <div className="flourish-embed flourish-chart" data-src="visualisation/20481194" style={{ width: "30%" }}></div>
            <div className="flourish-embed flourish-chart" data-src="visualisation/20481151" style={{ width: "24%" }}></div>
            <div className="flourish-embed flourish-chart" data-src="visualisation/20481125" style={{ width: "22%" }}></div>
            <div className="flourish-embed flourish-chart" data-src="visualisation/20481027" style={{ width: "14%" }}></div>
            
</div>

<p>
  La <span className="text-orange-500 font-bold">contaminación plástica</span> es un desafío global que requiere el esfuerzo conjunto de <span className="text-orange-500 font-bold">individuos</span>, <span className="text-orange-500 font-bold">gobiernos</span> y <span className="text-orange-500 font-bold">empresas</span>. Los datos y visualizaciones presentados demuestran la magnitud del problema, pero también reflejan las oportunidades que tenemos para marcar la diferencia. Desde reducir nuestro consumo de plásticos y reciclar de manera responsable hasta exigir políticas más estrictas y apoyar <span className="text-orange-500 font-bold">iniciativas sostenibles</span>, cada acción cuenta.
</p>

<p>
  Es momento de actuar: el futuro de nuestros <span className="text-orange-500 font-bold">océanos</span> y la <span className="text-orange-500 font-bold">vida en el planeta</span> dependen de las decisiones que tomemos hoy. Cambiar nuestros <span className="text-orange-500 font-bold">hábitos</span>, educarnos y comprometernos con <span className="text-orange-500 font-bold">prácticas sostenibles</span> no solo beneficia al <span className="text-orange-500 font-bold">medio ambiente</span>, sino que también asegura un <span className="text-orange-500 font-bold">mundo más limpio y saludable</span> para las próximas generaciones. ¡El cambio empieza con vos!
</p>

<img src="/tres2.png" width="70%" alt="fotitostres" style={{ marginBottom: "30px" }} />

   

<img src="/manoscroll.png" width="3%" alt="manoscroll"  />

<ScrollSection />
        </div>

    );
}
