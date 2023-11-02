import React from "react";
import { NavLink } from "react-router-dom";

export default ({ close, items }) => (
  <div className="menu">
    <ul>
      {items.map(item => (
        <li key={item.title + item.route}>
          <NavLink onClick={close} className="font-mono text-5xl no-underline font-bold text-pink hover:text-black" to={item.route}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);
