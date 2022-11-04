import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import DriverSidebarDashboard from "../DriverSidebarDashboard/DriverSidebarDashboard";
import DropdownStatus from "./DropdownStatus";

const DriverAssignTask = () => {
  const [taskData, setTaskData] = useState([]);
  useEffect(() => {
    getAssignTask();
  }, []);

  const getAssignTask = async () => {
    try {
      var driverName = Cookies.get("name");

      let response = await fetch(`/get_driver_actions/${driverName}`, {
        method: "GET",
      });

      let data = await response.json();
      setTaskData(data.data.data);
      // console.log(data.data.data)
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(taskData);

  return (
    <div>
      <DriverSidebarDashboard />
      <div>
        <div className=" sm:rounded-lg pt-[10rem] pl-[20rem] pr-[5rem]">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Driver Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Task Type
                </th>
                <th scope="col" className="py-3 px-6">
                  Landmark
                </th>
                <th scope="col" className="py-3 px-6">
                  Locality
                </th>
                <th scope="col" className="py-3 px-6">
                  Area
                </th>
                <th scope="col" className="py-3 px-6">
                  Date
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {taskData.map((item) => (
                <tr
                  key={item}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.drivername}
                  </th>
                  <td className="py-4 px-6">
                    {item.binId ? "New Bin" : "New Complaint"}
                  </td>
                  <td className="py-4 px-6">{item.landmark}</td>
                  <td className="py-4 px-6">{item.locality}</td>
                  <td className="py-4 px-6">{item.area}</td>
                  <td className="py-4 px-6">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      {item.date}
                    </a>
                  </td>
                  <td className="py-4 px-6">
                    {/* <DropdownStatus item={item} /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DriverAssignTask;
