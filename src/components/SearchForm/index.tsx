import styles from "./search-form.module.scss";
import { Button } from "@/components/Button";

export const SearchForm = () => {
  return (
    <form className={styles.form} action="/">
      <input
        name="q"
        className={styles.input}
        placeholder="Digite o que você procura"
      />
      <Button>Buscar</Button>
    </form>
  );
};
