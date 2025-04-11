import { Eye } from "lucide-react";
import { TableSketon } from "../skeletons/table-skeleton";

export const DashboardTable = ({
  loading,
  tableData,
}: {
  loading: boolean;
  tableData: object[];
}) => {
  return (
    <div className="overflow-x-auto bg-white rounded-md">
      <table className="w-full">
        <thead>
          <tr className="bg-purple-600 text-white">
            <th className="py-4 px-6 text-left">Serial</th>
            <th className="py-4 px-6 text-left">Name</th>
            <th className="py-4 px-6 text-left">Email</th>
            <th className="py-4 px-6 text-left">Date</th>
            <th className="py-4 px-6 text-left">Action</th>
          </tr>
        </thead>
        {loading ? (
          <TableSketon />
        ) : (
          <tbody>
            {tableData.map((offerReview, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-6 text-gray-600">{index}</td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Profile Image"
                      className="w-8 h-8 rounded-full"
                    />
                    <span>Tausif Ahemd</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-600">
                  tausif.ritu1@gamil.c
                </td>

                <td className="py-4 px-6 text-gray-600">
                  {/* {new Date(offerReview.createdAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })} */}
                  10 Dec 2024
                </td>

                <td className="py-4 px-6">
                  <button
                    className="text-gray-600 hover:text-purple-600"
                    // onClick={() => showModal(offerReview)}
                  >
                    <Eye size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};
