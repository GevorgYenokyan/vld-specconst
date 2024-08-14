import Image from "next/image";
import styles from "./page.module.css";
import Menu from "./navigation/menu";
import HomeVideo from "./home/components/homeVideo";
import AboutUs from "./home/components/aboutUs";

export default function Home() {
    return (
        <main className={styles.main}>
            <Menu />
            <HomeVideo />
            <AboutUs />
        </main>
    );
}
