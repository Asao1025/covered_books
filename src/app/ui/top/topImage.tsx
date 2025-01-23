import styles from '@/app/ui/top/top.module.css'

export default function TopImageComponent() {
  return(
    <div className={styles.topImage}>
        <h1>aa</h1>
        <audio src="/sounds/test.mp3" id="musicplayer" autoPlay></audio>
    </div>
  )
}