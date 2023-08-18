import Profile from "./Profile/Profile"
import Statistics from "./Statistics/Statistics";

import user from 'components/Profile/user.json'
import arreyData from 'components/Statistics/data.json'
import friends from 'components/FriendList/friends.json'
import Friends from "./FriendList/FriendList";
import Transactions from "components/TransactionHistory/transactions.json";
import TransactionHistory from "./TransactionHistory/TransactionHistory";


export const App = () => {
  return (
  <>
  <Profile
  username={user.username}
  tag={user.tag} location={user.location}
  avatar={user.avatar} stats={user.stats} />
  
  <Statistics data={arreyData} title="Upload stats" />
  <Statistics data={arreyData} />
  <Statistics data= {arreyData} title="Followers"/>

  <Friends friends={friends} />
  <TransactionHistory data={Transactions} />
  </>
  )
};
