import estilo from "./footer.module.css"
import Logo from "../Logo/logo"

export default function Footer(){
    return (
        <footer className={estilo.footer}>
            <div className={estilo.caixa_contato}>
                
                <div className={estilo.caixa_informacoes}>
                    <Logo/>
                </div>
                <div className={estilo.caixa_informacoes}>
                    <h4>ENDEREÇO</h4>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className={estilo.caixa_informacoes}>
                    <h4>CONTATO</h4>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className={estilo.caixa_informacoes}>
                    <h4>HORÁRIOS</h4>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <p>Gelateria. Orgulhosamente desenvolvido por "Karedog"</p>
        </footer>

    );
}