import React from "react";
import { useSelector } from "react-redux";
import Barchart from "../components/Barchart";
import CalendarComponent from "../components/Calender";
import LineChart from "../components/Linechart";
import Piechart from "../components/Piechart";
import ProgressBar from "../components/Progressbar";
import { selectCurrentUser } from "../Store/Auth/AuthSlice";

const projectData = [
  {
    name: "Design autotransport",
    category: "P1",
    progress: 100,
    status: "Completed",
    assignee: "Marie Louise",
    date: "19/9/2024",
  },
  {
    name: "Food APP",
    category: "P2",
    progress: 60,
    status: "In Progress",
    assignee: "Evodia",
    date: "19/9/2024",
  },
  {
    name: "Design autotransport",
    category: "P1",
    progress: 20,
    status: "Overdue",
    assignee: "Prince",
    date: "19/9/2024",
  },
];

function Dashboard() {
  const currentUser = useSelector(selectCurrentUser); // get current user

  return (
    <div className="flex flex-col min-h-full">
      <div className="flex-grow p-4 sm:p-4 bg-gray-100 overflow-x-hidden">
        <header className="mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#264667] pb-4 sm:pb-7">
            Welcome Back,{" "}
            <span className="text-[#4b749d]">
              {currentUser.user_data?.hod_name}
            </span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Let's make our department a great place for everyone. Check your new
            notifications below.
          </p>
        </header>

        <section className="mt-6 sm:mt-10">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-2/3 bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <Barchart />
            </div>
            <div className="w-full lg:w-1/3 p-4 sm:p-6 bg-white rounded-lg shadow-md flex items-center justify-center">
              <CalendarComponent />
            </div>
          </div>
        </section>

        <section className="mt-6 sm:mt-10">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Employees Chart Overview
          </h2>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <LineChart />
          </div>
        </section>

        <section className="mt-6 sm:mt-10">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            Project Progress & Status
          </h2>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/2 bg-white p-4 sm:p-8 rounded-lg shadow-md flex items-center justify-center">
              <Piechart />
            </div>
            {/* <div className="w-full lg:w-1/2 bg-white p-4 sm:p-8 rounded-lg shadow-md overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Project</th>
                    <th className="px-4 py-2 text-left">Category</th>
                    <th className="px-4 py-2 text-left">Progress</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Assignee</th>
                    <th className="px-4 py-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {projectData.map((project, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">{project.name}</td>
                      <td className="px-4 py-2">{project.category}</td>
                      <td className="px-4 py-2">
                        <ProgressBar progress={project.progress} status={project.status} />
                      </td>
                      <td className="px-4 py-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium
                          ${project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                            project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                            'bg-red-100 text-red-800'}`}>
                          {project.status}
                        </span>
                      </td>
                      <td className="px-4 py-2">{project.assignee}</td>
                      <td className="px-4 py-2">{project.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
