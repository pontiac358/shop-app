import React from 'react'
import { shallow } from 'enzyme'
import { App }   from '../App'

describe('Products container', () => {
    const props = {
        fetchMenu : () => {}
    };

    const wrapper = shallow(<App {...props} />);
    it("render correctly App container", () => {
        expect(wrapper).toMatchSnapshot();
    });
});

