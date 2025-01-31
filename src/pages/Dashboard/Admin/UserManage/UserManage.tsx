import UserLisItem from "../../../../components/Dashboard/UserManage/UserList";
import TableTh from "../../../../components/Shared/Table/TableTh";

const UserManage = () => {
  return (
    <div>
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
            <UserLisItem />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManage;
