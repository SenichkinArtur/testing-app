import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Top from './Top';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('renders', () => {
    it(`render Top component without props`, () => {
      const component = shallow(<Top />);
      expect(component.find('ul')).toHaveLength(1);
      expect(component.find('li')).toHaveLength(0);
    });
   
    it(`render Top component with props`, () => {
      const component = shallow(<Top list={['item1', 'item2', 'item4']} />);
      expect(component.find('ul')).toHaveLength(1);
      expect(component.find('li')).toHaveLength(3);
    });
   
    it('match snapshot', () => {
      const component = shallow(<Top list ={ [1,2,3,4]} />);
      expect(component).toMatchSnapshot();
    });
});