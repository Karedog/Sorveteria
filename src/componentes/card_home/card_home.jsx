import estilo from "./card_home.module.css"

export default function CardHome(props){
    return (
        <div className={estilo.card_home}>
            <h3>{props.titulo}</h3>
            <p className={estilo.textoBold}><span>{props.textoBold}</span></p>
            <p className={estilo.texto}>{props.texto}</p>
        </div>
        
    );
}