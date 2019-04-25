import React from 'react'
import { shallow } from 'enzyme'
import { ProductList }   from '../ProductList'

describe('ProductsList component', () => {
    const props = {
        products: [{
            id: 1,
            title: 'test1',
            price: 200
        }],
        cart: {}
    };

    const wrapper = shallow(<ProductList {...props} />);

    it("render correctly ProductList container", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders <ProductItem /> wrapper', () => {
        expect(wrapper.find('ProductItem')).toHaveLength(props.products.length)
    })
});

