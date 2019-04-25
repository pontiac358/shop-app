import React from 'react'
import { shallow } from 'enzyme'
import { Home } from '../Home'

describe('Home container', () => {
    const props = {
        productsAll: {
            data: [{
                title: 'test1',
                products: []
            }],
            isLoading: false,
            errorMsg: null,
        },
        match: { params: { id: 1 }},
        fetchAllProducts: () => {}
    };

    const wrapper = shallow(<Home { ...props } />);
    it("render correctly Home container", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("render correctly product title prop", () => {
        expect(wrapper.find('Title').at(0).text()).toEqual(props.productsAll.data[0].title);
    });
});

