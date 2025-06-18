import CardSabores from "../card_sabores/card_sabores";
import style from "./sabores_main.module.css"
import imgSaborOreo from "../../../public/sabor-oreo.png"
import imgSaborPist from "../../../public/sabor-pistache.png"
import imgSaborKiwi from "../../../public/sorbet-kiwi.png"
import imgSaborLimao from "../../../public/sorbet-limao.png"
import imgSaborMora from "../../../public/sorbet-morango.png"
import imgSaborCook from "../../../public/sabor-cookies-avela.png"

export default function Sabores(){
    return (
        <section className={style.section_sabores}>
            <h2>SABORES DE SORVETE</h2>
            <div className={style.card_box}>
                <CardSabores 
                    title="Sorvete de Oreo" 
                    image={imgSaborOreo.src} 
                    text="Delicioso sorvete sabor Oreo. Uma explosão de sabor."
                    alt="imagem de uma bola de soverte de oreo"
                    />
                <CardSabores 
                    title="Sorvete Pistache" 
                    image={imgSaborPist.src} 
                    text="Cremoso sorvete sabor pistache com pedacinhos de semente."
                    alt="imagem de uma bola de soverte de pistache"
                    />
                <CardSabores 
                    title="Sorvete Cookies & Avelã" 
                    image={imgSaborCook.src} 
                    text="O nosso melhor sorvete. Você vai adorar o sabor."
                    alt="imagem de uma bola de soverte de cookie"
                    />
                <CardSabores 
                    title="Sorvete de Kiwi" 
                    image={imgSaborKiwi.src} 
                    text="Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C."
                    alt="imagem de uma bola de soverte de kiwi"
                    />
                <CardSabores 
                    title="Sorvete de Morango" 
                    image={imgSaborMora.src} 
                    text="Sorvete de morango gourmet. Tradicional e saboroso."
                    alt="imagem de uma bola de soverte de morango"
                    />
                <CardSabores 
                    title="Sorvete de Limão Siciliano" 
                    image={imgSaborLimao.src} 
                    text="O incrivel sorvete gourmet de limão siciliano vai te encantar."
                    alt="imagem de uma bola de soverte de limão"
                />
            </div>
        </section>
    );
}