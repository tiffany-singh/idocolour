import React from "react";
import MenuButton from '../components/MenuButton';

export default (props) => (
  // <div className="fixed pin-r mr-10 mt-6 outline-none">
  <div>
    <MenuButton menuList={props.menuList}/>
    {/* <ReactJkMusicPlayer {...props.musicParams}/> */}
  </div>
);