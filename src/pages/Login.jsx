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
          <p>
            <FontAwesomeIcon icon={faAngleLeft} /> Back
          </p>
        </div>

        <div className="flex flex-col items-start py-10">
          <h2 className=" text-[36px]">Sign In</h2>
          <p className="text-[16px]">
            Enter your email and password to sign in!
          </p>
          <div className="flex flex-row items-center w-[100%]">
            <div className="flex-1 bg-gray-500 h-[1px]" />
            <span className="p-2">or</span>
            <div className="flex-1 bg-gray-500 h-[1px]" />
          </div>
          <label htmlFor="">Email*</label>
          <CustomInput placeholder="mail@simmmple.com" />
          <label htmlFor="">Password*</label>
          <CustomInput placeholder="Min. 8 characters" />
          <div className="flex flex-row ">
            <label htmlFor="">
              <input type="checkbox" />
              keep me logged in
            </label>
            <a href="#">forget password?</a>
          </div>
          <button className="bg-red-500 w-[24vw] h-[6vh] text-white rounded-lg">
            Sign In
          </button>
          <div className="flex flex-row">
            not registered yet?
            <a href="#">Create an Account</a>
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
        <div />
        <div
          className="text-center rounded-3xl flex flex-col 
          justify-center items-center"
        >
          <div>
            <img src={logo} className="w-[360px] h-[80px]" />
          </div>
          <div className="h-20" />
          <div
            className="text-center border w-[28vw] h-[16vh] flex flex-col justify-center
            items-center rounded-3xl"
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
