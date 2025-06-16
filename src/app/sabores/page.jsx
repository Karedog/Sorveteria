import Banner from "@/componentes/banner/banner"
import bannerImage from "../../../public/banner-sabores.jpg"
import SaboresMain from "@/componentes/sabores-main/sabores_main"

export default function Sabores(){ 
    return (
        <>
            <Banner bannerImg={bannerImage.src} titulo={'NOSSOS SABORES'} />
            <SaboresMain/>
        </>

    )
}