import Container from "Container/Container";
import user from './Components/Profile/user.json';
import Profile from './Components/Profile/Profile';

import Statistic from './Components/Statistics/Statistics';
import data from './Components/Statistics/data.json';

import Friends from "Components/Friends/Friends";
import dataFriends from './Components/Friends/friends.json';


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
      {dataFriends.map(friend => 
        <Friends
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
      />
    )}
     
    </Container>
 )
}



export default App;