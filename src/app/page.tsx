import styles from './page.module.css';
import Content from './components/Content';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Content />
      </main>
    </div>
  );
}
