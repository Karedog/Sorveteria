import styles from "./page.module.css";
import Banner from "@/componentes/banner/banner";
import bannerImg from "../../public/banner-home.png";
import HomeMain from "@/componentes/home_main/home_main";

export default function Home() {
  return (
    <main className={styles.page}>
      asdasd
      <Banner titulo="SORVERTE ARTESANAL" bannerImg={bannerImg.src} customClass={styles.bannerBackground}/>
      <HomeMain/>
    </main>
  );
}
