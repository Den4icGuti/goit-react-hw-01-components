import Friends from "./Friends";
import styles from './Frindes.module.css'

export default function FriendsList({item}) {
  return (
    <ul className={styles.FriendsList}>
      {item.map(items =>
        <li className={styles.itemList} key={items.id}>
          <Friends
          isOnline={items.isOnline}
          avatar={items.avatar}
          name={items.name}
          />
        </li>
      )}
    </ul>
  )
 }