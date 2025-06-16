import style from "./sobre_main.module.css"
import soverteriaImg from "../../../public/sorveteria.jpg"
import sobreImg from "../../../public/sobre-image.jpg"


export default function Sobre(){
    return (
        <main className="Sobre">
            <section>
                <h2>Sobre Nós</h2>
                <p><span>Nós simplesmente amamos sorvete!</span></p>
                <p>
                    Somos uma empresa apaixonada pelo que faz. Colocamos amor
                     em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para 
                     varejo como para atacado. 
                </p>
                <p>
                    Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                </p>
            </section>
            <section>
                    <img src={soverteriaImg.src} alt="asdasd" />
                    <img src={sobreImg.src} alt="asdasd" />
            </section>
        </main>
    );
}