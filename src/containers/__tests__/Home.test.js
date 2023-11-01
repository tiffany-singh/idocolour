import React from 'react';
import {shallow} from 'enzyme';
import Home from '../Home';

describe("Home", function(){
  let mountedHome;

  beforeEach(() => {
    mountedHome = shallow(<Home />);
  });

  it('renders without crashing', () => {
    let mountedHome = shallow(<Home />);
  });

  it('renders hue image', ()=> {
    const hueImage = mountedHome.find({ image:"/images/hue.jpg"});
    expect(hueImage.length).toBe(1);
  })

  it('renders menu button component', ()=> {
    const menuButton = mountedHome.find('MenuButton');
    expect(menuButton.length).toBe(1);
  })

  it('renders 2 image button components', ()=> {
    const textButtons = mountedHome.find('TextButton');
    expect(textButtons.length).toBe(2);
  })
});