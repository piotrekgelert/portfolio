import { Details } from "types";
import { Link } from "./Link";

import styles from "./Header.module.css";

export const Header = ({ name, links }: Details) => (
  <header>
    <h1 className={styles["header-title"]}>{name}</h1>
    <div className={styles["header-links"]}>
      {Object.entries(links).map(([key, val]) => (
        <Link key={key} label={key} href={val} />
      ))}
    </div>
  </header>
);
