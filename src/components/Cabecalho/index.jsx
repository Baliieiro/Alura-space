import logo from "./logo.png";
import search from "./search.png";
import React from "react";
import styles from "./Cabecalho.module.scss";

const Cabecalho = () => {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo do Alura Space" />
      <div className={styles.cabecalho__container}>
        <input type="text" className={styles.cabecalho__input} placeholder="O que você procura?"/>
        <img src={search} alt="ícone de Lupa" />
      </div>
    </header>
  );
};

export default Cabecalho;
