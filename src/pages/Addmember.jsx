import React, { useState } from "react";
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { FaChevronDown, FaChevronUp, FaCamera, FaUser } from "react-icons/fa"; 

const AddMemberForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    idNumber: "",
    nationality: { value: 'Rwanda', label: 'Rwanda' },
    email: "",
    gender: "",
    profilePicture: null,
    team: ""
  });

  const [isTitleDropdownOpen, setIsTitleDropdownOpen] = useState(false);

  const countryOptions = countryList().getData();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePicture: e.target.files[0],
    });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({
      ...formData,
      nationality: selectedOption,
    });
  };

  const toggleTitleDropdown = () => {
    setIsTitleDropdownOpen(!isTitleDropdownOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    if (formData.profilePicture) {
      console.log("Uploaded file:", formData.profilePicture);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('profile-picture-input').click();
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <div className="w-full text-2xl sm:text-3xl font-semibold text-[#090909] pb-10 sm:pb-7">
        <h1 className="text-2xl font-bold pt-50 pb-5">Add Member to the Team</h1>
        <h1 className="text-xl text-[#264667] font-bold pb-5">Fields are mandatory</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg"
      >
        
        <div className="flex items-center mb-6 cursor-pointer" onClick={toggleTitleDropdown}>
          <h2 className="text-xl font-semibold">Choose a title</h2>
          {isTitleDropdownOpen ? (
            <FaChevronUp className="ml-2 text-gray-500" />
          ) : (
            <FaChevronDown className="ml-2 text-gray-500" />
          )}
        </div>

        {isTitleDropdownOpen && (
          <div className="mb-4">
            <Select
              name="title"
              options={[
                { value: 'Software Dev', label: 'Software Dev' },
                { value: 'Designer', label: 'Designer' },
                { value: 'Data Scientist', label: 'Data Scientist' },
                { value: 'Ai Dev', label: 'Ai Dev' },
              ]}
              onChange={(selectedOption) => {
                setFormData({ ...formData, title: selectedOption.value });
              }}
              className="w-full"
              placeholder="Select Title"
              isSearchable
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Profile Picture
          </label>
          <div className="flex items-center space-x-4">
            <div
              className="w-16 h-16 bg-gray-100 border rounded-full flex items-center justify-center relative cursor-pointer"
              onClick={triggerFileInput}
            >
              {formData.profilePicture ? (
                <img
                  src={URL.createObjectURL(formData.profilePicture)}
                  alt="Profile Preview"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <FaUser className="w-8 h-8 text-gray-400" />
                  <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full">
                    <FaCamera className="text-gray-500 w-4 h-4" />
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col text-gray-600">
              <p className="text-sm font-medium">Drop the picture here</p>
              <p className="text-sm text-gray-500">Only JPEG, JPG, PNG</p>
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="profile-picture-input"
            />
            <label
              htmlFor="profile-picture-input"
              className="text-blue-600 text-sm font-semibold cursor-pointer"
            >
              Select the file
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              ID Number
            </label>
            <input
              type="text"
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nationality
            </label>
            <Select
              name="nationality"
              value={formData.nationality}
              onChange={handleSelectChange}
              options={countryOptions}
              className="w-full"
              isSearchable
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Team
            </label>
            <select
              name="team"
              value={formData.team}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              required
            >
              <option value="">Select Team</option>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Data Science">Data Science</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#264667] text-white font-bold py-2 px-4 rounded-none hover:bg-gray-500 focus:outline-none focus:bg-blue-700"
        >
          Save the Information
        </button>
      </form>
    </div>
  );
};

export default AddMemberForm;
