
export default function Header() {

    return (
        <div id="headeer">
            <video playsInline autoPlay loop muted>
                <source src="/videos/plasticos.mp4" type="video/mp4" />
            </video>
            <h1 className="absolute top-0 text-5xl font-bold m-60 ml-5"> Asia, la mayor fuente de contaminación </h1>
            <h1 className="absolute top-14 text-5xl font-bold m-60 ml-5"> plástica en los océanos </h1>
        </div>
    )
}