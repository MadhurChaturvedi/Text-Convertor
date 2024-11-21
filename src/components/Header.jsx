import React from "react";
import PropTypes from "prop-types";
import { FaSun } from "react-icons/fa";
import { MdOutlineNightlightRound } from "react-icons/md";

export default function Header(props) {
  const [theme, setTheme] = React.useState("bg-dark");

  return (
    <header
      className={`w-full bg-slate-100 p-3 flex justify-between px-5 ${theme} `}
    >
      <img src={props.img} alt="" className="w-14" />

      <ul className="flex text-xl items-center gap-4 uppercase">
        <li
          className={`cursor-pointer hover:text-blue-400 ${
            theme == "bg-dark" ? "text-white" : "text-black"
          }  transition-all`}
        >
          <FaSun
            color="orange"
            className="text-5xl hover:spin"
          />
        </li>
      </ul>

      {/* <ul className="flex text-xl items-center gap-4"></ul> */}
    </header>
  );
}

Header.propTypes = {
  img: PropTypes.string,
};
