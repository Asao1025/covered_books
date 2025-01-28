import styles from '@/app/page.module.css'
import TopImageComponent from './ui/top/topImage';
import TopMessageComponent from './ui/top/topMessage';
import PopComponents from './ui/pop/popContents';

export default function Home() {
  return (
      <body className={styles.body}>
        <TopImageComponent />
        <TopMessageComponent />
        <PopComponents />
      </body>
  );
}
