import React from "react";
import open from "./open.png";
import like from "./favorito.png";

const Card = ({ item, styles }) => {
  return (
    <li className={styles.galeria__card}>
      <img
        className={styles.galeria__imagem}
        src={item.imagem}
        alt={item.titulo}
      />
      <p className={styles.galeria__descricao}>{item.titulo}</p>
      <div>
        <p>{item.creditos}</p>
        <span>
          <img src={open} alt="icone de expandir" />
          <img src={like} alt="ícone de coração ou favoritar" />
        </span>
      </div>
    </li>
  );
};
export default Card
