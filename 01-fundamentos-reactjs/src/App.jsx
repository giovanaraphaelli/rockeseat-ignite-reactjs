import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <strong>Posts</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            adipisci cupiditate temporibus fuga nulla dolor nobis reprehenderit!
            Doloribus obcaecati, accusamus eius omnis cupiditate veniam
            perspiciatis autem eveniet quis dignissimos quia!
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
