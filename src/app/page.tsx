import Container from "./container";
import styles from '@/assets/page.module.css'

export default function Home() {
  return (
    <main className={`flex flex-col items-center justify-between py-4 ${styles.page_wrapper}`}>
      <Container>
        <span>ss</span>
        <span style={{display: 'inline !important'}}></span>
      </Container>
    </main>
  );
}
