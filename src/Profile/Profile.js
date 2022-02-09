import propTypes from "prop-types";
import styles from './Profile.module.css'

export default function Profile(props) {
  const { username, tag, location,stats } = props;
  
  return (
    <div className={styles.profile}>
      <div>
    <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          width={120}
          alt="User avatar"
          className={styles.avatar}
    />
        <p className={styles.text}>{username}</p>
        <p className={styles.text}>{tag}</p>
        <p className={styles.text}>{location}</p>
  </div>
    
      <ul className={styles.list}>
        <li className={styles.item}>
          <span class="label">Followers:</span>
      <span class="quantity"> {stats.followers}</span>
    </li>
    <li  className={styles.item}>
          <span class="label">Views:</span>
      <span class="quantity"> {stats.views}</span>
    </li>
    <li  className={styles.item}>
          <span class="label">Likes: </span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
  );
 }