import estilo from "./banner.module.css"

export default function banner(props){
    return (
        <section className={`${estilo.banner} ${props.customClass || ""}` } style={ {backgroundImage: `url(${props.bannerImg})` }}>
            <h1 className={estilo.titulo_banner}>{props.titulo}</h1>
        </section>
    )
}