import logo from './logo.svg';
import './App.css';
import Sidebar from './components/organisms/Sidebar';
import SearchInput from './components/molecules/SearchInput';
import TopNav from './components/organisms/TopNav';

function App() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='bg-slate-100 w-full'>
        <TopNav/>
      </div>
    </div>
  );
}

export default App;
