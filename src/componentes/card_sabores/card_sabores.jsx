import Image from "next/image";
import style from "./card_sabores.module.css"

export default function CardSabores(props){
    return (
        <div className={style.card_sabores} >
            <div className={style.card_img}>
                <Image 
                    src={props.image} 
                    alt={props.alt} 
                    width={100} 
                    height={100}
                />
            </div>
            <div className={style.card_text}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
}