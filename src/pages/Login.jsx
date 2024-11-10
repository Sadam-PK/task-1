import React from "react";

import { faAngleLeft, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomInput from "../components/CustomInput";
import logo from "../assets/logo.svg";

const Login = () => {
  return (
    <div className="flex flex-row w-full h-auto">
      {/* left div */}
      <div
        className="flex flex-col w-full mx-auto py-5
         justify-around items-center gap-32"
      >
        <div className="flex flex-col w-[50%] mx-auto ">
          <a href="#" className="text-gray-400">
            <FontAwesomeIcon icon={faAngleLeft} className="text-gray-400" />{" "}
            Back
          </a>
        </div>

        <div className="flex flex-col items-start">
          <h2 className=" text-[36px] font-bold text-red-500">Sign In</h2>
          <p className="text-[16px] text-gray-500">
            Enter your email and password to sign in!
          </p>
          <div className="flex flex-row items-center w-[100%] text-gray-400">
            <div className="flex-1 bg-gray-300 h-[1px]" />
            <span className="px-2 py-4">or</span>
            <div className="flex-1 bg-gray-300 h-[1px]" />
          </div>
          <label htmlFor="" className="pb-2">
            Email<span className="text-red-500">*</span>{" "}
          </label>
          <CustomInput placeholder="mail@simmmple.com" />
          <label htmlFor="" className="pt-4 pb-2">
            Password<span className="text-red-500">*</span>{" "}
          </label>
          <CustomInput placeholder="Min. 8 characters" />
          {/* &&&&&&&& check gap or justify &&&&&&& */}
          <div className="flex flex-row py-6 gap-10">
            <label htmlFor="" className="">
              <input type="checkbox" className="mr-3" />
              Keep me logged in
            </label>
            <a href="#" className="text-red-500">
              Forget password?
            </a>
          </div>
          <button className="bg-red-500 w-[24vw] h-[6vh] text-white rounded-xl font-bold">
            Sign In
          </button>
          <div className="flex flex-row py-6 gap-1">
            <p>Not registered yet?</p>
            <a href="#" className="text-red-500">
              Create an Account
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start text-gray-500">
          <p>@2023 Spark Drive. All rights reserved</p>
        </div>
      </div>

      {/* right div */}
      <div
        className="flex flex-col w-full justify-between items-center
           bg-red-500 py-5 mx-auto"
        style={{
          borderBottomLeftRadius: "110px",
        }}
      >
        {/* height div */}
        <div />
        <div
          className="text-center rounded-3xl flex flex-col pt-20
          justify-center items-center"
        >
          <div>
            <img src={logo} className="w-[360px] h-[80px]" />
          </div>
          <div className="h-20" />
          <div
            className="text-center w-[28vw] h-[16vh] flex flex-col justify-center
            items-center rounded-3xl ml-10"
            style={{ border: "2px solid rgba(255, 255, 255, 0.2)" }}
          >
            <p className="text-white font-light">
              Learn more about Air Drive on{" "}
            </p>
            <h2 className="font-bold text-xl text-white">Spark.pl</h2>
          </div>
        </div>

        <div className="flex flex-row text-white">
          <ul className="flex flex-row gap-5">
            <li>Licence</li>
            <li>Terms of use</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
