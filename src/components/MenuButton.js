import React from 'react';
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

export default class MenuButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { active: false };
    this.menuList = props.menuList;
  }

  render() {
    return (
      <Popup
      modal
      overlayStyle={{ background: "rgba(10,0,0,0.7", zIndex:1 }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      lockScroll={true}
      trigger={open => <BurgerIcon open={open} />}
      >
        {close => <Menu close={close} items={this.menuList} />}
      </Popup>
    );
  }
}