import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <header className="w-full bg-slate-100 p-3 flex justify-between px-5">
      <img src={props.img} alt="" className="w-14" />

      <ul className="flex text-xl items-center gap-4 uppercase">
        <li className="cursor-pointer hover:text-blue-400 transition-all">
          home
        </li>
      </ul>

      <ul className="flex text-xl items-center gap-4">
        <li className="cursor-pointer hover:text-blue-400 transition-all group ">
          Login
          <hr className="hidden group-hover:flex border-4" />
        </li>
        <li className="cursor-pointer hover:text-blue-400 transition-all group">
          Register
          <hr className="hidden group-hover:flex border-4" />
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  img: PropTypes.string,
};
