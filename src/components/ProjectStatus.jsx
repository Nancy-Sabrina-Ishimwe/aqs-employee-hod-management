import React from 'react';
import { Clock } from 'lucide-react';

const statuses = [
  { title: 'To do', color: 'bg-purple-100', items: [
    { name: 'Design New UI', progress: 0, date: '5 Sept 2024' },
    { name: 'Design New UI', progress: 40, date: '5 Sept 2024' },
    { name: 'Design New UI', progress: 40, date: '5 Sept 2024' },
  ]},
  { title: 'In Progress', color: 'bg-blue-100', items: [
    { name: 'Create Database', progress: 40, date: '5 Sept 2024' },
    { name: 'User Authentication', progress: 80, date: '5 Sept 2024' },
    { name: 'Update dashboard', progress: 50, date: '5 Sept 2024' },
  ]},
  { title: 'Done', color: 'bg-green-100', items: [
    { name: 'Social Media Post', progress: 100, date: '5 Sept 2024' },
    { name: 'UI Update', progress: 100, date: '5 Sept 2024' },
  ]},
  { title: 'Overdue', color: 'bg-red-100', items: [
    { name: 'Social Media Post', progress: 20, date: '5 Sept 2024' },
    { name: 'UI Update', progress: 30, date: '5 Sept 2024' },
  ]},
];

const ProjectCard = ({ item, color }) => (
  <div className={`p-4 rounded-lg ${color} mb-2`}>
    <div className="flex justify-between items-center mb-2">
      <h3 className="font-semibold">{item.name}</h3>
      <Clock size={16} />
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div 
        className="bg-blue-600 h-2.5 rounded-full" 
        style={{ width: `${item.progress}%` }}
      ></div>
    </div>
    <p className="text-xs mt-2">{item.progress}%</p>
    <p className="text-xs mt-1 text-gray-500">{item.date}</p>
  </div>
);

const ProjectStatusBoard = () => (
  <div className="p-6 bg-white rounded-lg shadow">
    <h2 className="text-2xl font-bold mb-4">Projects Status</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statuses.map((status, index) => (
        <div key={index}>
          <h3 className="font-semibold mb-2">{status.title}({status.items.length})</h3>
          {status.items.map((item, itemIndex) => (
            <ProjectCard key={itemIndex} item={item} color={status.color} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default ProjectStatusBoard;