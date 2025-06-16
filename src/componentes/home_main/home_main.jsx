import estilo from "./home_main.module.css"
import CardHome from "../card_home/card_home"
import Image from "next/image"
import bannerSabores from "../../../public/banner-sabores.jpg"
import bannerSobre from "../../../public/sobre-image.jpg"
import bannerEvento from "../../../public/eventos-image.jpg"

export default function InformacoesHome(){
    return (
        <section className={estilo.section_cards}>
            <div className={estilo.cards_box}>
                <Image src={bannerSabores} className={estilo.box_image } alt="asdasd"></Image>
                <CardHome className={estilo.box_text} titulo="NOSSOS SABORES" textoBold="Novos e deliciosos" texto="Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!"/>
            </div>
            <div className={estilo.cards_box}>
                <CardHome titulo="NOSSOS EVENTOS" textoBold="Delicias com sorvete!" texto="Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente."/>
                <Image className={estilo.box_image} src={bannerEvento} alt="asdasd"></Image>
            </div>
            <div className={estilo.cards_box}>
                <Image className={estilo.box_image} src={bannerSobre} alt="asdasd"></Image>
                <CardHome className={estilo.box_text} titulo="SOBRE NÓS" textoBold="Alegria em cada casquinha!" texto="Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade."/>
            </div>
        </section>

        )
}
