import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import addImage from "../assets/images/addhim.jfif";
import Btn from "../components/Btn";
import { createEmployee } from "../Store/Data/EmployeeSlice";
import { selectCurrentUser } from "../Store/Auth/AuthSlice";

function CreateEmailEmployee() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser); // get current user

  const [email, setEmail] = useState("");
  const [personalemail, setPersonalemail] = useState("");
  const [employee_name, setEmployee_name] = useState("");
  const [contact_number, setcontact_number] = useState("");
  const [position, setPosition] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [default_password, setdefault_password] = useState(false);
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!employee_name.trim()) {
      errors["employee_name"] = "Full name cannot be empty";
    }

    if (!email) {
      errors["email"] = "Email cannot be empty";
    } else if (!emailRegex.test(email)) {
      errors["email"] = "Email is not valid";
    }

    if (!contact_number) {
      errors["contact_number"] = "Number cannot be empty";
    } else if (contact_number.length > 15) {
      errors["contact_number"] = "Number must be at least 8 characters";
    }
    if (!personalemail.trim()) {
      errors["personalemail"] = "Personalemail cannot be empty";
    }

    if (!position.trim()) {
      errors["position"] = "Position cannot be empty";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const formData = {
        employee_name,
        email,
        personalemail,
        position,
        default_password,
        contact_number,
        hod_fk_id: currentUser.user_data.id,
      };

      try {
        const resultAction = await dispatch(createEmployee(formData));
        if (createEmployee.fulfilled.match(resultAction)) {
          // Clear form fields on successful submission
          setEmail("");
          setPersonalemail("");
          setEmployee_name("");
          setcontact_number("");
          setPosition("");
          setdefault_password("");

          // Redirect to the employee list page
          navigate("/dashboard/employee");
        }
      } catch (error) {
        if (error.isAxiosError) {
          console.error("Axios Error: ", error.toJSON());
        } else {
          console.error("Unexpected Error: ", error);
        }
      }
      // console.log(formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-10 ">
      <div className="w-[70vw] bg-white  h-full  p-20 shadow-2xl rounded-lg grid grid-cols-2 gap-3 md:gird-cols-2 ">
        <h2 className="text-1xl  font-semibold text-gray-700 ">
          Add an Employee
        </h2>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="current"
            strokeWidth="1.5"
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-3xl font-bold text-[#264667] mr-50 mt-4 pt-0.5">
              New Employee
            </h2>
            <h2 className="text-1xl font-bold text-gray-500 mr-50 mt-4 mb-10">
              Create an employee email
            </h2>
            <input
              type="text"
              id="employee_name"
              name="employee_name"
              value={employee_name}
              placeholder="Input full name"
              onChange={(e) => setEmployee_name(e.target.value)}
              className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.employee_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.employee_name}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              id="personalemail"
              name="personalemail"
              value={personalemail}
              placeholder="Add the new email:example@aqs.org"
              onChange={(e) => setPersonalemail(e.target.value)}
              className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.personalemail}
              </p>
            )}
          </div>

          <div>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.personalemail && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              id="position"
              name="position"
              value={position}
              placeholder="Position"
              onChange={(e) => setPosition(e.target.value)}
              className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.position && (
              <p className="text-red-500 text-sm mt-1">{errors.position}</p>
            )}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="defaultPassword"
              name="defaultPassword"
              value={default_password}
              placeholder="Enter at least 8+ characters"
              onChange={(e) => setdefault_password(e.target.value)}
              className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <FaEye
              className="absolute right-7 bottom-1/3 transform text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />

            {errors.defaultPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.default_password}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              id="contact_number"
              name="contact_number"
              value={contact_number}
              placeholder="Add his current contact_number 0789453567"
              onChange={(e) => setcontact_number(e.target.value)}
              className="mt-1 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.contact_number && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contact_number}
              </p>
            )}
          </div>
          <Btn text="Send an invite" type="submit" />
        </form>
        <div className="col-span-2">
          <img
            src={addImage}
            alt="Add Image"
            className="max-h-60 mx-96  my-8 -mr-3"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateEmailEmployee;
