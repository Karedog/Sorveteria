import Image from "next/image"
import logoImg from "../../../public/logo.png"
import estilos from "./logo.module.css"
export default function Logo(){
    return (
        <figure className={estilos.figure_logo}>
            <Image src={logoImg} alt="Logo da Gelateria" className={estilos.logo}></Image>
        </figure>
    )
}