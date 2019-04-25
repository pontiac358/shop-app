import React from 'react'
import { shallow } from 'enzyme'
import CartItem   from '../CartItem'

describe('CartItem component', () => {
    const props = {
        product: {
            title: 'test',
            img: '/test.png',
            price: 100
        },
        count: 1,
        totalPrice: 100
    };

    const wrapper = shallow(<CartItem {...props} />);

    it("render correctly CartItem container", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("render correctly cart title prop", () => {
        expect(wrapper.find('Title').at(0).text()).toEqual(props.product.title);
    });

    it("render correctly cart img prop", () => {
        expect(wrapper.find({ src: props.product.img })).toHaveLength(1)
    });

    it("render correctly cart price prop", () => {
        expect(wrapper.find('TotalPrice').at(0).text()).toEqual(props.totalPrice + ' р');
    });
});

