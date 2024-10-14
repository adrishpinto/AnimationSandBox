import React from "react";

function Login() {
  const login = "this is random text";
  return (
    <div>
      <div className="bg-gradient-to-l from-blue-500 to-purple-500 h-screen">
        <div>
          <div className="opacity-0">asdads</div>
          <h1 className="text-4xl font-light text-center mt-10">Login Page</h1>
        </div>
        <div className="bg-white w-2/5 mx-auto mt-12 rounded-xl border border-slate-500 shadow-2xl py-16 pt-8">
          <h1 className="text-3xl text-gray-600 text-center mt-10">
            Sign In With
          </h1>
          <div className="mt-10 w-2/3 mx-auto">
            <div className="text-gray-700 font-semibold text-sm mb-2">
              Username
            </div>
            <input
              type="text"
              className="border border-slate-200 shadow-2xl h-10 w-full bg-slate-100 focus:outline-none focus:bg-slate-200 pl-4"
            ></input>
          </div>
          <div className="mt-10 w-2/3 mx-auto">
            <div className="text-gray-700 font-semibold text-sm mb-2">
              Password{" "}
              <span className="text-[12px] text-gray-400 pl-2 underline">
                Forgot?
              </span>
            </div>
            <input
              type="text"
              className="border border-slate-200 shadow-2xl h-10 w-full bg-slate-100 focus:outline-none focus:bg-slate-200 pl-4"
            ></input>
            <div className="bg-gradient-to-l from-blue-500 to-purple-500 text-slate-50 mt-8  text-center py-2 rounded-md text-md hover:cursor-pointer hover:bg-gray-800 ">
              Sign in
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
