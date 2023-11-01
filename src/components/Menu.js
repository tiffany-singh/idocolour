import React from "react";
import { NavLink } from "react-router-dom";

export default ({ close, items }) => (
  <div className="menu">
    <ul>
      {items.map(item => (
        <li key={item.title + item.route}>
          <NavLink onClick={close} className="font-sans text-3xl no-underline uppercase font-thin text-white hover:text-black" to={item.route}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);
