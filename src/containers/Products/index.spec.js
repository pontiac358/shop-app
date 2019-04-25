import React from 'react'
import { shallow } from 'enzyme'
import { Products } from '../Products'

describe('Products container', () => {
    const props = {
        products: {
            data: [],
            isLoading: false,
            errorMsg: null,
        },
        match: { params: { id:1 } },
        fetchProducts: () => {}
    };

    const wrapper = shallow(<Products { ...props } />);
    it("render correctly Products container", () => {
        expect(wrapper).toMatchSnapshot();
    });
});

