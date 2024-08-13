import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function MainHeader(props) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const nav = (value) => {
    navigate(`/${value}`);
  };

  return (
    <>
      <div
        className={`border border-slate-50 m-10 mx-20 h-72 pt-[90px] relative transition-all duration-500 rounded-lg shadow-2xl sm:text-6xl text-2xl font-light text-center top-10 ${"changing-background"}`}
      >
        <div className="overflow z-20 ">
          <motion.div
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => nav(props.nav)}
            className="w-1/3 mx-auto"
          >
            <div className="hover:cursor-pointer">{props.title}</div>
          </motion.div>
        </div>
        <div
          className="absolute inset-0 bg-black transition-transform duration-500 ease-in-out transform origin-top-left"
          style={{
            transform: show ? "scaleX(1)" : "scaleX(0)",
          }}
        />

        <div
          className={`text-white top-0 p-10 pt-20 text-center text-2xl absolute inset-0 w-[70%] mx-auto transition-all duration-1000 ${
            show
              ? "opacity-1 duration-1000 "
              : "opacity-0 invisible duration-300 "
          }`}
        >
          {props.details}
        </div>

        <div
          className={`text-sm border border-black w-32 mx-auto relative top-10 sm:text-xl hover:cursor-pointer hover:bg-gray-900 hover:bg-opacity-10 transition-all duration-500 ${
            show ? "border-gray-300 text-gray-300" : ""
          }`}
        >
          <div onClick={() => setShow((prev) => !prev)}>
            Show {show ? "less" : "more"}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
