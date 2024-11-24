import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/download.png";

function SplashPage() {
   const navigate = useNavigate();

   return (
      <div className="flex items-center justify-center h-screen ">
         <div className="text-center">
            <motion.img
               src={logo}
               alt="AQS Logo"
               className="w-100 h-80 mx-auto"
               initial={{ scale: 1.7 }}
               animate={{ scale: 1 }}
               transition={{ duration: 0.5 }}
               whileHover={{ scale: 1.7 }}
               whileTap={{ scale: 0.9 }}
               onClick={() => navigate("/login")}
            />
         </div>
      </div>
   );
}

export default SplashPage;
