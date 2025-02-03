/* eslint-disable @typescript-eslint/no-explicit-any */
import TableTd from "../../Shared/Table/TableTd";
import { useGetAllLogedInUserOrderQuery } from "../../../redux/features/order/orderApi";

const MyOrderLis = () => {
  const { data: orders } = useGetAllLogedInUserOrderQuery(undefined);
  console.log(orders?.data);
  return (
    <>
      {orders?.data?.map((data: any) => (
        <tr className="odd:bg-gray-50" key={data?._id}>
          <TableTd tdHeading={`${data?.totalPrice}BDT`} />
          <TableTd tdHeading={data?.status} />
          <TableTd tdHeading={data?.deliveryStatus} />
        </tr>
      ))}
    </>
  );
};

export default MyOrderLis;
