import useAuth from '@/common/hooks/use-auth';

function App() {
  const auth = useAuth();
  console.log(auth);
  return (
    <div>
      <header className="shadow p-4">
        <h1 className="text-2xl font-semibold">runde.tips</h1>
      </header>
    </div>
  );
}

export default App;
