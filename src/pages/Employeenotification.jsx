import React from 'react';

const notifications = [
  { id: 1, sender: 'Sarah', message: 'New project update available', avatar: '/path/to/avatar1.png', isRead: false },
  { id: 2, sender: 'John', message: 'Meeting at 2:00 PM', avatar: '/path/to/avatar2.png', isRead: true },
  { id: 3, sender: 'Sarah', message: 'Reminder: Submit report', avatar: '/path/to/avatar1.png', isRead: false },
  { id: 4, sender: 'John', message: 'Feedback on your task', avatar: '/path/to/avatar2.png', isRead: true },
];

const Employeenotification = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notif) => (
          <div key={notif.id} className={`flex items-center p-4 rounded-lg shadow-md ${notif.isRead ? 'bg-gray-200' : 'bg-blue-600 text-white'}`}>
            <img src={notif.avatar} alt={`${notif.sender} avatar`} className="w-10 h-10 rounded-full mr-4" />
            <div>
              <p className="font-semibold">{notif.sender}</p>
              <p>{notif.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="flex items-center p-4 bg-white rounded-full shadow-md">
          <button className="text-blue-600 text-xl">
            <span className="material-icons">add_circle</span>
          </button>
          <input type="text" placeholder="Type your message here..." className="flex-1 mx-4 outline-none" />
          <button className="text-blue-600 text-xl">
            <span className="material-icons">send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employeenotification;
