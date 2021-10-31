import Profile from './components/Profile/profile';
import user from './user.json';
import StatSection from './components/Statistic/statSection';
import StatisticalDataList from './components/Statistic/statisticalDataList';
import statistic from './statistical-data.json';
import FriendsList from './components/Friends/friendsList';
import friends from './friends.json';
import transactionInf from './transactions.json';
import TransList from './components/Transaction/transList';
import Table from './components/Transaction/transTab';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <StatSection title="Upload stats">
        <StatisticalDataList items={statistic} />
      </StatSection>

      <StatSection>
        <StatisticalDataList items={statistic} />
      </StatSection>

      <FriendsList items={friends} />

      <Table>
        <TransList items={transactionInf} />
      </Table>
    </div>
  );
}
