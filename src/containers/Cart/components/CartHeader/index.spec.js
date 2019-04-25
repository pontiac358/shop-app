import React from 'react'
import { shallow } from 'enzyme'
import CartHeader  from '../CartHeader'

describe('ProductsList component', () => {
    const props = {
        cart:{
            count: 1,
            totalPrice: 100
        }
    };

    const wrapper = shallow(<CartHeader {...props} />);

    it("render correctly CartHeader container", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders <CartLink /> wrapper', () => {
        expect(wrapper.find('CartLink')).toHaveLength(1)
    })
});

