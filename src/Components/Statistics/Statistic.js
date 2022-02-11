import styles from './Statistics.module.css';


export default function Satistic({label,percentage}) { 

  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>UPLOAD STATS</h2>

      <ul className={styles.statList}>
        <li className={styles.item}>
          <span className={styles.label}>{label}</span>
          <span className={styles.label}>{percentage}</span>
    </li>
    <li className={styles.item}>
      <span className={styles.label}>.mp3</span>
      <span className={styles.label}>14%</span>
    </li>
    <li className={styles.item}>
      <span className={styles.label}>.pdf</span>
      <span className={styles.label}>41%</span>
    </li>
        <li className={styles.item}>
          
          <span className={styles.label}>.mp4</span>
      <span className={styles.label}>12%</span>
    </li>
  </ul>
</section>
  )
}