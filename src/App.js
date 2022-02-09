import Container from "Container/Container";
import user from './Profile/user.json'
import Profile from './Profile/Profile'
function App() { 
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
   </Container>
 )
}


export default App;