import styles from '@/app/ui/top/top.module.css'

export default function TopMessageComponent() {
    return(
        <div className={styles.topMessage}>
            <h1>CoveredBooks</h1>
            <p>題名や作者、表紙は伏せられた本(CoveredBooks)と</p>
            <p>1枚のPopをきっかけに出会う。</p>
            <p>書店にはない新しい出会いが皆さんを待っています。</p>
        </div>
        )
 }