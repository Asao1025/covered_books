import styles from '@/app/ui/top/top.module.css'

export default function TopMessageComponent() {
    return(
        <div className={styles.topMessage}>
            <p>ここにメッセージを記入</p>
            <p>改行するときは二つのPを作る</p>
        </div>
        )
 }