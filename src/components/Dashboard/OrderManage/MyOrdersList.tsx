/* eslint-disable @typescript-eslint/no-explicit-any */
import TableTd from "../../Shared/Table/TableTd";
import {
  useGetAllLogedInUserOrderQuery,
  useVerifyOrderQuery,
} from "../../../redux/features/order/orderApi";
import { useSearchParams } from "react-router-dom";

const MyOrderLis = () => {
  const { data: orders } = useGetAllLogedInUserOrderQuery(undefined);
  const [searchParams] = useSearchParams();
  const { isFetching } = useVerifyOrderQuery(searchParams.get("order_id"));
  console.log(isFetching);
  return (
    <>
      {orders?.data?.map((data: any) => (
        <tr className="odd:bg-gray-50" key={data?._id}>
          <TableTd tdHeading={`${data?.totalPrice}BDT`} />
          <TableTd tdHeading={data?.status} />
          <TableTd tdHeading={data?.deliveryStatus} />
          <td className="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-800">
            <div className="space-y-1 text-sm">
              <button className="bg-primary rounded text-white py-1 px-2 cursor-pointer">
                Verify
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default MyOrderLis;
