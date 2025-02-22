import React, { useState } from "react";
import { setSearchTerm } from "../../features/doctor/doctorsSlice";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { setUserLoggout } from "../../features/user/userSlice";

const Navbar = () => {
  const { pathname } = useLocation();
  const { isLogged } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const [term, setTerm] = useState("");

  const handleClick = (e) => {
    setTerm(e.target.value);
    dispatch(setSearchTerm(term));
  };

  const handleLogout = () => {
    if (confirm("are you sure to logout?")) {
      dispatch(setUserLoggout());
    }
  };
  return (
    <header className="px-20 py-4">
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="" className="w-7 h-7" />
          <Link to="/">MedicalMa</Link>
        </div>
        {pathname === "/doctors" && isLogged && (
          <div className="flex justify-between w-1/4 text-end relative">
            <CiSearch className="absolute left-2 top-2 text-sm text-black font-bold" />
            <input
              type="text"
              className="outline-none text-sm py-1 px-2 pl-7 border border-gray-300 rounded-4xl placeholder:text-xs text-black font-bold"
              placeholder="nom, city, spécialité..."
              value={term}
              onChange={handleClick}
            />
            {!isLogged ? (
              <>
                <Link
                  to="login"
                  className="border border-gray-300 rounded py-1 px-3 text-sm font-bold"
                >
                  Login
                </Link>
                <Link
                  to="sign-up"
                  className="bg-blue-700 px-3 py-1 text-sm rounded text-white font-bold"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className=" flex items-center border border-red-500 px-3 py-1 text-sm rounded text-red-500 font-bold cursor-pointer"
              >
                <IoIosLogOut />
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
