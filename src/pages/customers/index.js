import React from "react";
import PageTitle from "../../components/atoms/PageTitle";
import TableData from "../../components/atoms/TableData";
import TableHead from "../../components/atoms/TableHead";
import Table from "../../components/organisms/Table";
import withCard from "../../components/withCard";
import customer_list from "../../assets/JsonData/customers-list.json";

const Customers = () => {
  const renderHead = (item, index) => (
    <TableHead index={index}>{item.split("_").join(" ")}</TableHead>
  );

  const renderBody = (item, index) => (
    <tr className="hover:bg-blue-400 hover:text-white" key={index}>
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
    <div>
        <PageTitle>Customers</PageTitle>
        <Table
          limit={10}
          list_data={customer_list}
          renderHead={(item, index) => renderHead(item, index)}
          renderBody={(item, index) => renderBody(item, index)}
        />
    </div>
  );
};

export default Customers;
