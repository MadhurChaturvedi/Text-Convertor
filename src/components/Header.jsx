import React from "react";
import PropTypes from "prop-types";
import { FaSun } from "react-icons/fa";
import { MdOutlineNightlightRound } from "react-icons/md";

export default function Header(props) {
  return (
    <header
      className={`w-full bg-slate-100 p-3 flex justify-between px-5 bg-${props.mode} `}
    >
      <img src={props.img} alt="" className="w-14" />

      <ul className="flex text-xl items-center gap-4 uppercase">
        <li className="cursor-pointer hover:text-blue-400">
          {props.mode === "dark" ? (
            <MdOutlineNightlightRound
              color="White"
              className="text-5xl hover:spin"
              onClick={props.toggleMode}
            />
          ) : (
            <FaSun
              color="orange"
              className="text-5xl hover:spin"
              onClick={props.toggleMode}
            />
          )}

          {/* <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              onChange={}
            />
          </div> */}
        </li>
      </ul>

      {/* <ul className="flex text-xl items-center gap-4"></ul> */}
    </header>
  );
}

Header.propTypes = {
  img: PropTypes.string,
};
