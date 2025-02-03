/* eslint-disable @typescript-eslint/no-explicit-any */
import TableTd from "../../Shared/Table/TableTd";
import {
  useGetAllOrderForAdminQuery,
  useUpdateOrderDeliveryStatusMutation,
} from "../../../redux/features/order/orderApi";
import { OrderDeliveryStatus } from "../../../constant/global.constant";
import { ChangeEvent } from "react";
import { toast } from "sonner";

const OrderLisItem = () => {
  const { data: allOrders } = useGetAllOrderForAdminQuery(undefined);
  const [updateDeliveryStatus] = useUpdateOrderDeliveryStatusMutation();

  // Handle Delivery Status
  const handleDeliveryStatus = async (
    e: ChangeEvent<HTMLSelectElement>,
    id: string
  ) => {
    const res = await updateDeliveryStatus({
      id,
      deliveryStatus: e.target.value,
    });
    if (res?.data?.message) {
      toast.success(res?.data?.message);
    } else {
      toast.error("Something Went Wrong!");
    }
  };
  return (
    <>
      {allOrders?.data?.map((item: any) => (
        <tr className="odd:bg-gray-50" key={item?._id}>
          <TableTd tdHeading={item?.totalPrice} />
          <TableTd tdHeading={item?.status} />
          <TableTd tdHeading={item?.deliveryStatus} />

          <td className="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-800">
            <div className="space-x-1 flex items-center justify-center">
              <div className="space-y-1 text-sm">
                <select
                  defaultValue={item?.deliveryStatus}
                  name="deliveryStatus"
                  onChange={(e) => handleDeliveryStatus(e, item?._id)}
                  className="px-2 py-1 rounded-md focus:border-primary border outline-none text-gray-800 transition-all duration-200"
                >
                  {OrderDeliveryStatus.map((item, idx) => (
                    <option key={idx} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default OrderLisItem;
