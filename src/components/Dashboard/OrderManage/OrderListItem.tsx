/* eslint-disable @typescript-eslint/no-explicit-any */
import TableTd from "../../Shared/Table/TableTd";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useGetAllOrderForAdminQuery } from "../../../redux/features/order/orderApi";
import { FaRegEye } from "react-icons/fa";

const OrderLisItem = () => {
  const { data: allOrders } = useGetAllOrderForAdminQuery(undefined);
  console.log(allOrders);
  return (
    <>
      {allOrders?.data?.map((item: any) => (
        <tr className="odd:bg-gray-50" key={item?._id}>
          <TableTd tdHeading={item?.totalPrice} />
          <TableTd tdHeading={item?.status} />
          <TableTd tdHeading={item?.deliveryStatus} />

          <td className="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-800">
            <div className="space-x-1">
              <button className="bg-primary text-white p-1 rounded-sm cursor-pointer">
                <FaRegEye />
              </button>
              <button className="bg-rose-600 text-white p-1 rounded-sm cursor-pointer">
                <RiDeleteBin5Fill />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default OrderLisItem;
