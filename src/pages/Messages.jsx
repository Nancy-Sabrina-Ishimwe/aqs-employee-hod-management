import React, { useState } from 'react';

function Messages() {
  const [activeTab, setActiveTab] = useState('viewAll');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      name: 'Ruhumuriza',
      task: 'P1 (Food monitoring)',
      time: '1 min ago',
      status: 'personal',
      read: false,
    },
    {
      id: 2,
      name: 'Ruhumuriza',
      task: 'P1 (Food monitoring)',
      time: '1 min ago',
      status: 'personal',
      read: false,
    },
    {
      id: 3,
      name: 'Ruhumuriza',
      task: 'P1 (Food monitoring)',
      time: '1 min ago',
      status: 'personal',
      read: true,
    }
  ]);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Handle mark as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md">
      {/* Top Bar */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Notifications</h2>
        <div className="flex space-x-4">
          <button className="text-green-600">Mark as read</button>
          <button className="text-gray-600">Compose ✏️</button>
          <button className="text-gray-600">Filter ⚙️</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-3 py-1 ${activeTab === 'viewAll' ? 'bg-green-100 text-green-600' : 'text-gray-600'}`}
          onClick={() => handleTabChange('viewAll')}
        >
          View all
        </button>
        <button
          className={`px-3 py-1 ${activeTab === 'inbox' ? 'bg-green-100 text-green-600' : 'text-gray-600'}`}
          onClick={() => handleTabChange('inbox')}
        >
          Inbox
        </button>
        <button
          className={`px-3 py-1 ${activeTab === 'team' ? 'bg-green-100 text-green-600' : 'text-gray-600'}`}
          onClick={() => handleTabChange('team')}
        >
          Team
        </button>
        <button
          className={`px-3 py-1 ${activeTab === 'archived' ? 'bg-green-100 text-green-600' : 'text-gray-600'}`}
          onClick={() => handleTabChange('archived')}
        >
          Archived
        </button>
      </div>

      {/* Notification List */}
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex items-center">
              <img src={`https://i.pravatar.cc/50?img=${notification.id}`} alt={notification.name} className="w-10 h-10 rounded-full mr-4"/>
              <div>
                <h4 className="font-semibold">{notification.name} added work to {notification.task}</h4>
                <p className="text-sm text-gray-500">{notification.time} | {notification.status}</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="bg-green-200 text-green-700 px-4 py-2 rounded-lg">View the project</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Accept</button>
              <button className="bg-red-200 text-red-700 px-4 py-2 rounded-lg">Decline</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Messages;
