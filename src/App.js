import Container from "Container/Container";
import user from './Components/Profile/user.json';
import Profile from './Components/Profile/Profile';
import Statistic from './Components/Statistics/Statistic'
import stats from './Components/Statistics/data.json'
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
      <Statistic stats={stats.data}/>
    </Container>
 )
}


export default App;