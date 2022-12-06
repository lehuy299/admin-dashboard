import logo from './logo.svg';
import './App.css';
import Sidebar from './components/organisms/Sidebar';
import Table from './components/organisms/Table';
import customer_list from './assets/JsonData/customers-list.json'
import TableData from './components/atoms/TableData';
import TableHead from './components/atoms/TableHead';
import TopNav from './components/organisms/TopNav';
import PageTitle from './components/atoms/PageTitle';

function App() {
  const renderHead = (item, index) => (
    <TableHead index={index}>{item.split('_').join(' ')}</TableHead>
  );

  const renderBody = (item, index) => (
    <tr className='hover:bg-blue-400 hover:text-white' key={index}>
      <TableData>{item.id}</TableData>
      <TableData>{item.name}</TableData>
      <TableData>{item.email}</TableData>
      <TableData>{item.phone}</TableData>
      <TableData>{item.total_orders}</TableData>
      <TableData>{item.total_spend}</TableData>
      <TableData>{item.location}</TableData>
    </tr>
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className='bg-slate-50 w-full h-screen px-10 ml-72 dark:bg-black'>
        <TopNav/>
        <PageTitle>Customers</PageTitle>
        <Table 
          limit={10}
          list_data={customer_list}
          renderHead={(item, index) => renderHead(item, index)}
          renderBody={(item, index) => renderBody(item, index)}
        />
      </div>
    </div>
  );
}

export default App;
