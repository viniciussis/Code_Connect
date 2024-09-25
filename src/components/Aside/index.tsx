import styles from "./aside.module.scss";
import Image from "next/image";
import logo from "./logo.png";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Image src={logo} alt="code connect logo" />
    </aside>
  );
};
