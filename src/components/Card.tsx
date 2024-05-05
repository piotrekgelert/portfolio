import { Project } from "types";
import { Image } from "./Image";
import { Link } from "./Link";

import styles from "./Card.module.css";

interface PropTypes {
  project: Project;
}

export const Card = ({ project }: PropTypes) => {
  const { label, imageName, description, links, tags } = project;

  const baseUrl = import.meta.env.DEV ? "" : "/portfolio";
  const imageUrl = `${baseUrl}/images/${imageName}`;

  return (
    <div className={styles.card}>
      <h3>{label}</h3>
      <Image url={imageUrl} label={label} />
      <div className={styles.description}>{description}</div>
      <div className={styles.links}>
        {Object.entries(links).map(([key, val]) => (
          <Link key={key} href={val} label={key} />
        ))}
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </div>
  );
};
