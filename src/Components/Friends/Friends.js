import PropTypes from "prop-types"

export default function Friends(props) { 
  const {avatar,name,isOnline} = props
  return (
  <li>
      <span>Statys {isOnline ? 'red' : 'green'}</span>
      <img  src={avatar} alt="User avatar" width="48" />
      <p>Name: {name}</p>
</li>
  )
}

Friends.propTypes = {
  avatar: PropTypes.string,
  name:PropTypes.string
}