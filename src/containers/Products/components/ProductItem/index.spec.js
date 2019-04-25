import React from 'react'
import { shallow } from 'enzyme'
import ProductItem   from '../ProductItem'

describe('ProductItem component', () => {
    const props = {
        product: {
            title: 'test',
            img: '/test.png',
            price: 100
        },
        addToCart: () => {},
        hasInCart: {}
    };

    const wrapper = shallow(<ProductItem {...props} />);

    it("render correctly ProductItem container", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("render correctly product title prop", () => {
        expect(wrapper.find('Title').at(0).text()).toEqual(props.product.title);
    });

    it("render correctly product img prop", () => {
        expect(wrapper.find({ src: props.product.img })).toHaveLength(1)
    });

    it("render correctly product price prop", () => {
        expect(wrapper.find('Price').at(0).text()).toEqual(props.product.price + ' р');
    });
});

