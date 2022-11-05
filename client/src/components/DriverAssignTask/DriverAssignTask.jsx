import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import DriverSidebarDashboard from "../DriverSidebarDashboard/DriverSidebarDashboard";
import DropdownStatus from "./DropdownStatus";
import { FaPen } from 'react-icons/fa'

const DriverAssignTask = () => {
  const [taskData, setTaskData] = useState([]);
  const [status, setStatus] = useState('')
  useEffect(() => {
    getAssignTask();
  }, []);

  const getAssignTask = async () => {
    try {
      var driverName = Cookies.get("drivername");
      console.log(driverName);
      let response = await fetch(`/get_driver_actions/${driverName}`, {
        method: "GET",
      });

      let data = await response.json();
      setTaskData(data.data.data);
      // console.log(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) =>{
    // console.log(e.target.value);
    setStatus(e.target.value)
    console.log(status)
  }
  const handleUpdate = async(e) =>{
    e.preventDefault();

//     let response = await fetch(`/update_action/`, { 
//   method: "PATCH",
// });

// let data = await response.text();
// console.log(data);

  }

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
                  key={item._id}
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

                    <form>
                      <label
                        for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                      >
                        Search
                      </label>
                      <div class="relative">
                        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        </div>
                        <input
                          type="search"
                          id="default-search"
                          class="block p-2 pl-6 w-30% text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          defaultValue={item.status}
                          onChange={handleChange}
                          required=""
                        />
                        <button
                          onClick={handleUpdate()}
                          type="submit"
                          class="text-white absolute right-20 bottom-1  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                        >
                          <FaPen/>
                        </button>
                      </div>
                    </form>
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
