import PropTypes from "prop-types";
import styles from './Frindes.module.css'


export default function Friends(props) { 
  const {avatar,name,isOnline} = props
  return (
    <div>
      <span className={styles.statysOnline}>{isOnline}</span>
      <img className={styles.imgUser} src={avatar} alt="User avatar" width="30" />
      <h2 className={styles.nameUser}>{name}</h2>
    </div>
  )
}

Friends.propTypes = {
  avatar: PropTypes.string.isRequired,
  name:PropTypes.string
}