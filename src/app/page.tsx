import styles from './page.module.css';
import Content from './components/Content';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Content />
        <SpeedInsights />
      </main>
    </div>
  );
}
