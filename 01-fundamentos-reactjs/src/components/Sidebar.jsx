import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://w.wallhaven.cc/full/72/wallhaven-72yov3.jpg"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/giovanaraphaelli.png" />
        <strong>Giovana Raphaelli</strong>
        <span>Front-End Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
