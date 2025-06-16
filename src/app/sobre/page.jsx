import SobreMain from "@/componentes/sobre-main/sobre_main";
import Banner from "@/componentes/banner/banner";
import sobreBannerImg from "../../../public/banner-sobre.png"
export default function Sobre(){
    return (
        <>
            <Banner titulo="A GELATERIA" bannerImg={sobreBannerImg.src}/>
            <SobreMain/>
        </>
    );
}