import NavBar from '../components/NavBar';

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className='p-6'>
        <h1 className='text-2xl font-bold'>Welcome to the Dashboard</h1>
        {/* Content here */}
      </div>
    </>
  );
};

export default Dashboard;
