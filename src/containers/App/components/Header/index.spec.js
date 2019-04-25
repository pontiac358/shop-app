import React from 'react'
import { shallow } from 'enzyme'
import Header from '../Header'

describe('ProductsList component', () => {
    const props = {};

    const wrapper = shallow(<Header {...props} />);

    it("render correctly Header container", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders <CartHeader /> wrapper', () => {
        expect(wrapper.find('CartHeader')).toHaveLength(1)
    })
})

