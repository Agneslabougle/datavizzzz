import FlourishEmbed from "./FlourishEmbed";

export default function Intro() {
    return (
        <div id="body--container" className="flex items-center flex-col mr-1 mt-10">
            <h1 style={{ marginLeft: "370px", alignSelf: "flex-start" }}> 
                Entre crisis y soluciones
            </h1>
            <p>
                Millones de toneladas de plástico llegan cada año al océano, y <span className="text-orange-500 font-bold">Asia</span>, con su rápido crecimiento y actividad industrial, se ha convertido en una de las mayores fuentes de esta <span className="text-orange-500 font-bold">crisis ambiental</span>. Desde bolsas y botellas hasta redes de pesca y desechos de un solo uso, estos materiales no solo contaminan las aguas, sino que afectan la vida marina y la salud humana, creando una amenaza duradera para el ecosistema y el bienestar global.
            </p>
            <p>
                Sin embargo, la misma región que enfrenta esta crisis también lidera iniciativas para cambiar el rumbo. Diversos países han comenzado a implementar prohibiciones y regulaciones sobre el uso de plásticos, avanzando hacia un modelo de <span className="text-orange-500 font-bold">consumo más sostenible</span>. Restaurar la salud de los océanos es una tarea urgente y colectiva, y con cada esfuerzo, damos un paso hacia un planeta más limpio y saludable para todos.
            </p>

            <h1 style={{ marginLeft: "370px", alignSelf: "flex-start", marginTop: "50px" }}>
                <span>Filipinas, India, Malasia y China</span>
            </h1>

            <p>
                Asia, con sus vastos territorios y población, es una de las regiones con <span className="text-orange-500 font-bold">mayor contribución a esta crisis ambiental</span>. Este impacto ambiental es liderado por países como <span className="text-orange-500 font-bold">Filipinas, India, Malasia y China</span>, que producen grandes cantidades de desechos plásticos debido a factores como el crecimiento poblacional y la falta de infraestructuras adecuadas para la gestión de residuos. A continuación, se muestra un desglose de los países asiáticos con mayor contribución a esta crisis ambiental, destacando el papel de cada uno en la generación de desechos plásticos en los océanos.
            </p>


            <FlourishEmbed />
        </div>
    );
}
