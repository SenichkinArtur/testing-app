import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });

it(`render App component without props`, () => {
  const component = shallow(<App />);
  expect(component.find('button')).toHaveLength(1);
});

it('call fn', () => {
  const fnMock = jest.fn();
  const wrapper = shallow(<App fn={fnMock}/>);
  wrapper.find('button').simulate('click');
  expect(fnMock.mock.calls.length).toBe(1);
  expect(wrapper.state().count).toBe(1);
})