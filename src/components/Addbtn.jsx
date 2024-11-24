import React from "react";

const Addbtn = ({ text, onClick }) => {
   return (
      <div className="flex items-center justify-center">
         <button
            className="w-50 h-50 bg-[#264667] text-white  py-2 px-4 rounded-full shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-offset-2"
            onClick={onClick}
         >
            {text}
         </button>
      </div>

   );
}

export default Addbtn;
