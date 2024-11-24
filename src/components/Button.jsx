import React from "react";

const Button = ({ text, onClick }) => {
   return (
      <div className="flex items-center justify-center">
         <button
            className="w-80 bg-[#264667] text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-offset-2"
            onClick={onClick}
            type="submit"
         >
            {text}
         </button>
      </div>

   );
}

export default Button;