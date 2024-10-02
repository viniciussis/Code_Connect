"use client"; // Error boundaries must be Client Components

import { ArrowBack } from "@/components/Icons/ArrowBack";
import { Heading } from "@/components/Heading";
import styles from "./error.module.scss";
import banner from "@/../public/500.png";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <Image src={banner} alt="Error 404 image" />
      <Heading>Opa! Ocorreu um erro.</Heading>
      <p className={styles.text}>
        Não conseguimos carregar a página, volte para seguir navegando.
      </p>
      <Link href="/">
        Voltar ao feed <ArrowBack color="#81FE88" />
      </Link>
    </div>
  );
}
