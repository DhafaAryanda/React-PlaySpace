import React from "react";
import { columns, Payment } from "./components/columns";
import { DataTable } from "./components/data-table";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "018ed52f",
      amount: 100,
      status: "pending",
      email: "ama@example.com",
      codeTransaction: "T-001",
      facilityName: "Facility 1",
      user: "Ontols",
    },
    {
      id: "028ed52f",
      amount: 100,
      status: "pending",
      email: "am@example.com",
      codeTransaction: "T-002",
      facilityName: "Facility 1",
      user: "Osas",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      codeTransaction: "T-003",
      facilityName: "Facility 1",
      user: "Osas",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      codeTransaction: "T-123",
      facilityName: "Facility 1",
      user: "Osas",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      codeTransaction: "T-123",
      facilityName: "Facility 1",
      user: "Osas",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      codeTransaction: "T-123",
      facilityName: "Facility 1",
      user: "Osas",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      codeTransaction: "T-123",
      facilityName: "Facility 1",
      user: "Osas",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      codeTransaction: "T-123",
      facilityName: "Facility 1",
      user: "Osas",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      codeTransaction: "T-123",
      facilityName: "Facility 1",
      user: "Osas",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      codeTransaction: "T-123",
      facilityName: "Facility 1",
      user: "Osas",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      codeTransaction: "T-123",
      facilityName: "Facility 1",
      user: "Osas",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      codeTransaction: "T-123",
      facilityName: "Facility 1",
      user: "Osas",
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      codeTransaction: "T-123",
      facilityName: "Facility 1",
      user: "Osas",
    },

    // ...
  ];
}

export default async function page() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
