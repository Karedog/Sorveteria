import estilo from "./banner.module.css"

export default function banner(props){
    return (
        <section className={estilo.banner} style={ {backgroundImage: `url(${props.bannerImg})` , backgroundSize: `${props.size}`}}>
            
            <h1 className={estilo.titulo_banner}>{props.titulo}</h1>
        </section>
    )
}