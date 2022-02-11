import styles from './Statistics.module.css';



export default function Satistic({ item,title }) { 
 
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
          {item.map(({ id, label, percentage }) => (
            <li className={styles.item} key={id}>
              <span className={styles.label}>{label}</span>
              <span className={styles.label}>{percentage}%</span>
            </li>
          ))}
       </ul>
  </section>
  );
}