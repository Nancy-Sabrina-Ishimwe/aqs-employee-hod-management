import React, { useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Design autotransport",
      category: "P1",
      progress: 100,
      status: "Completed",
      assignee: "Marie Louise",
      date: "19/9/2024"
    },
    {
      id: 2,
      name: "Design autotransport",
      category: "P1",
      progress: 100,
      status: "Completed",
      assignee: "Mansi",
      date: "19/9/2024"
    },
    {
      id: 3,
      name: "Food APP",
      category: "P2",
      progress: 50,
      status: "In Progress",
      assignee: "Evodia",
      date: "19/9/2024"
    },
    {
      id: 4,
      name: "Design autotransport",
      category: "P1",
      progress: 30,
      status: "Overdue",
      assignee: "Prince",
      date: "19/9/2024"
    },
  ]);

  const getStatusColor = (status) => {
    if (status === "Completed") return "bg-green-500";
    if (status === "In Progress") return "bg-blue-500";
    if (status === "Overdue") return "bg-red-500";
    return "bg-gray-500";
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">New Project</button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">#</th>
              <th className="py-2 px-4">Project Name</th>
              <th className="py-2 px-4">Category</th>
              <th className="py-2 px-4">Task Progress</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Assignee</th>
              <th className="py-2 px-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={project.id} className="border-b">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{project.name}</td>
                <td className="py-2 px-4">{project.category}</td>
                <td className="py-2 px-4">
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-gray-300">
                      <div
                        style={{ width: `${project.progress}%` }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${project.progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-2 px-4">
                  <span className={`text-white px-2 py-1 rounded ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </td>
                <td className="py-2 px-4">{project.assignee}</td>
                <td className="py-2 px-4">{project.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
