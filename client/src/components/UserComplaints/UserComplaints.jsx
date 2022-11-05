import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import UserDashboard from "../UserDashboard/UserDashboard";

const UserComplaints = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [locality, setLocality] = useState("");
  const [date, setDate] = useState("");
  const [landmark, setLandmark] = useState("");
  const [note, setNote] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);

  useEffect(() => {
    // if (
    //   username === "" ||
    //   phone === "" ||
    //   area === "" ||
    //   locality === "" ||
    //   date === "" ||
    //   landmark === "" ||
    //   note === ""
    // ) {
    //   setBtnDisable(true);
    // }
  }, []);

  const handleSubmit = async (e) => {
    var userToken = Cookies.get("usertoken");
    if (userToken) {
      var userId = Cookies.get("userId");
      // console.log(userId ,username, phone, area, locality, date, landmark, note)
      e.preventDefault();

      await fetch("/user_complaints", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          userId,
          username,
          phone,
          area,
          locality,
          date,
          landmark,
          note,
        }),
      })
        .then((res) => {
          if(res){
            window.alert("Complaint Sent Successfully")
          }
          if (res.status === 400) {
            window.alert("Please Valid Data");
          }
        })
        .catch((error) => {
          console.log(error);
          window.alert("Invalid Login");
        });
    }
  };
  return (
    <div>
      <UserDashboard />
      <section className="text-gray-400 bg-gray-900 body-font h-[100%]">
        <div className="container px-5 py-24 pl-[200px] mx-auto flex justify-center  items-center">
          <div className="w-[90%]  bg-gray-800 bg-opacity-50 rounded-lg p-8 pl-28 flex flex-col mt-10 md:mt-0">
            <h2 className="text-white text-lg font-bold title-font mb-5">
              Plz Enter Your Complaint
            </h2>
            <div className="relative flex flex-col mb-4">
              <label for="username" className="leading-7 text-sm text-gray-400">
                Username
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="username"
                name="username"
                className="w-1/2 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex flex-col mb-4">
              <label for="phone" className="leading-7 text-sm text-gray-400">
                Phone
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                type="phone"
                id="phone"
                name="phone"
                className="w-1/2 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex flex-col mb-4">
              <label for="area" className="leading-7 text-sm text-gray-400">
                Area
              </label>
              <input
                onChange={(e) => setArea(e.target.value)}
                type="text"
                id="area"
                name="area"
                className="w-1/2 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex flex-col mb-4">
              <label for="locality" className="leading-7 text-sm text-gray-400">
                Locality
              </label>
              <input
                onChange={(e) => setLocality(e.target.value)}
                type="text"
                id="locality"
                name="locality"
                className="w-1/2 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex flex-col mb-4">
              <label for="email" className="leading-7 text-sm text-gray-400">
                Landmark
              </label>
              <input
                onChange={(e) => setLandmark(e.target.value)}
                type="text"
                id="landmark"
                name="landmark"
                className="w-1/2 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex flex-col mb-4">
              <label for="date" className="leading-7 text-sm text-gray-400">
                Date
              </label>
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                id="date"
                name="date"
                className="w-1/2 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex flex-col mb-4">
              <label for="note" className="leading-7 text-sm text-gray-400">
                Note
              </label>
              <input
                onChange={(e) => setNote(e.target.value)}
                type="text"
                id="note"
                name="note"
                className="w-1/2 bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              disabled={btnDisable}
              onClick={handleSubmit}
              className="w-1/2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg disabled:opacity-50"
            >
              Send Complaint
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserComplaints;
