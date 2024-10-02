import styles from "./button.module.scss";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.btn}>{children}</button>;
};
