import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe("App", function(){

it('renders without crashing', () => {
  let mountedApp = shallow(<App />);
});

it('renders a react-router switch component', ()=> {
  let mountedApp = shallow(<App />);
  const locators = mountedApp.find('Switch');
  expect(locators.length).toBe(1);
})

});