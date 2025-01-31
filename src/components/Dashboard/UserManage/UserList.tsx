import TableTd from "../../Shared/Table/TableTd";

const UserLisItem = () => {
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
      <TableTd tdHeading="sasd safwe" />

      {/* <td className="whitespace-nowrap px-4 py-2 text-base font-medium text-gray-800">
        <div className="space-y-1 text-sm">
          <select
            disabled={email === user?.email}
            defaultValue={role}
            name="role"
            onChange={(e) => sweetAlert(userData?.email, e.target.value)} // Pass email and role as strings
            className="px-4 py-3 rounded-md focus:border-primary border outline-none text-gray-800 transition-all duration-200"
          >
            <option value="admin">ADMIN</option>
            <option value="user">USER</option>
          </select>
        </div>
      </td> */}
    </tr>
  );
};

export default UserLisItem;
