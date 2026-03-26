import { FaSuitcaseRolling } from "react-icons/fa";
import { LuTreePalm } from "react-icons/lu";

import styles from "./css/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <LuTreePalm />
      <h2 className={styles["main-title"]}>Traveller</h2>
      <FaSuitcaseRolling />
    </header>
  );
}

export default Header;
