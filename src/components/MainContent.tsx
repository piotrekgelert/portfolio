import { Project } from "types";
import { Card } from "components/Card";

import styles from "./MainContent.module.css";

interface PropTypes {
  projects: Project[];
}

export const MainContent = ({ projects = [] }: PropTypes) => (
  <div className={styles["main-content"]}>
    {projects.map((project) => (
      <Card key={project.label} project={project} />
    ))}
  </div>
);
