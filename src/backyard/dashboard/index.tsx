import { useDocTitle } from '~/common/hooks';

const Dashboard = () => {
  useDocTitle('', 'Hinterhof');

  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
};

export default Dashboard;
