import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Header from '../client/src/components/Header.jsx';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

let wrapper = shallow(<Header />);
let title = 'Test Title';

describe('Header', () => {
  it('Should show the title of this app', () => {
    expect(wrapper.find('h1').text()).toEqual('Shopping List')
  })
})
