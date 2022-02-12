import Container from "Container/Container";
import user from './Components/Profile/user.json';
import Profile from './Components/Profile/Profile';

import Statistic from './Components/Statistics/Statistics';
import data from './Components/Statistics/data.json';
import dataFriends from './Components/Friends/friends.json';
import FriendsList from "Components/Friends/FriendsList";

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
      <Statistic item={data} />
      <FriendsList item={dataFriends}/>
      </Container>
    )
}



export default App;