import styles from "./Botao.module.scss";

const Botao = ({ children }) => {
  return <button className={styles.Botao}>{children}</button>;
};

export default Botao;
