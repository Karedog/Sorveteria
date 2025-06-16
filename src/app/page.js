import styles from "./page.module.css";
import Banner from "@/componentes/banner/banner";
import bannerImg from "../../public/banner-home.png";
import HomeMain from "@/componentes/home_main/home_main";

export default function Home() {
  return (
    <main className={styles.page}>
      <Banner size='30%'titulo="SORVERTE ARTESANAL" bannerImg={bannerImg.src}/>
      <HomeMain/>
    </main>
  );
}
