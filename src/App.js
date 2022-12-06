import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/organisms/Sidebar";
import Table from "./components/organisms/Table";
import customer_list from "./assets/JsonData/customers-list.json";
import TableData from "./components/atoms/TableData";
import TableHead from "./components/atoms/TableHead";
import TopNav from "./components/organisms/TopNav";
import PageTitle from "./components/atoms/PageTitle";
import Customers from "./pages/customers";
import Layout from "./components/organisms/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="customers" element={<Customers />} />
      </Route>
    </Routes>
  );
}

export default App;
