import React, { useState } from 'react';

const Memberform = ({ onAddMember }) => {
  const [id, setId] = useState('');
  const [fullname, setFullname] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [team, setTeam] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMember = { id, fullname, gender, nationality, team };
    onAddMember(newMember); // Send member to parent
    setId('');
    setFullname('');
    setGender('');
    setNationality('');
    setTeam('');
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          ID
        </label>
        <input 
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Member ID"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Full Name
        </label>
        <input 
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Full Name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Gender
        </label>
        <input 
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Gender"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Nationality
        </label>
        <input 
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Nationality"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Team (Leave empty if no team)
        </label>
        <input 
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
          type="text"
          placeholder="Team Name"
        />
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Member
      </button>
    </form>
  );
};

export default Memberform;
