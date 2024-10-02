import { ArrowBack } from "@/components/Icons/ArrowBack";
import { Heading } from "@/components/Heading";
import styles from "./error.module.scss";
import banner from "@/../public/404.png";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <Image src={banner} alt="Error 404 image" />
      <Heading>Opa! Não encontrei nada.</Heading>
      <p className={styles.text}>
        Não conseguimos encontrar a página, volte para seguir navegando.
      </p>
      <Link href="/">
        Voltar ao feed <ArrowBack color="#81FE88" />
      </Link>
    </div>
  );
}
