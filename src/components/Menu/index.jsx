import React from "react";
import styles from "./Menu.module.scss";
import icones from "./icones.json";
import Icone from "./Icone";

const Menu = () => {
  return (
    <>
      <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
          {icones.map((icone) => (
            <Icone key={icone.id} icone={icone} styles={styles} />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Menu;
