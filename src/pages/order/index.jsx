import React from "react";
import CustomizedTables from "../../components/table/table";
import OrderDetailFilter from "../../components/filters/orderDetailFilter";

const tableCell = [
  "S.no",
  "Customer Name",
  "Waiter",
  "date",
  "TAble Number",
  "Amount",
  "Action",
];
function OrderDetails() {
  return (
    <div>
      <OrderDetailFilter />
      <CustomizedTables tableCell={tableCell} />
    </div>
  );
}

export default OrderDetails;
