import TableTd from "../../Shared/Table/TableTd";
import { FaSquarePen } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";

const MyOrderLis = () => {
  return (
    <tr className="odd:bg-gray-50">
      <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        <img
          src="https://i1.sndcdn.com/artworks-fxC6ObQj6BE30rFP-iDIkEQ-t500x500.jpg"
          alt=""
          className="w-20 p-1 h-20 bg-white border mx-auto"
        />
      </td>
      <TableTd tdHeading="asasdfwe" />
      <TableTd tdHeading="sasd safwe" />

      <td className="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-800">
        <div className="space-x-1">
          <button className="bg-primary text-white p-1 rounded-sm cursor-pointer">
            <FaSquarePen />
          </button>
          <button className="bg-rose-600 text-white p-1 rounded-sm cursor-pointer">
            <RiDeleteBin5Fill />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyOrderLis;
