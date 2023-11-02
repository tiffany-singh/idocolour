import React from 'react';
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import Menu from "./Menu";

const contentStyle = {
  background: "rgba(255,255,255,0)",
  border: "none",
  'flex-direction': "column"
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
      overlayStyle={{ background: "rgba(255,255,0,1", zIndex:1 }}
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