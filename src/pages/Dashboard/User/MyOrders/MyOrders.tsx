import MyOrderLis from "../../../../components/Dashboard/OrderManage/MyOrdersList";
import TableTh from "../../../../components/Shared/Table/TableTh";

const MyOrders = () => {
  return (
    <div>
      <div className="mb-1 flex justify-end">
        <button className="bg-primary active:bg-primary uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150">
          Add New
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <TableTh tHeading="Image" />
              <TableTh tHeading=" Name" />
              <TableTh tHeading="Email" />
              <TableTh tHeading="  Action" />
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-center">
            <MyOrderLis />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
