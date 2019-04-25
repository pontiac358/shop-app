import React from 'react'
import { shallow } from 'enzyme'
import { Cart }   from '../Cart'

describe('Cart container', () => {
    const props = {
        products: [],
        cart: {}
    };

    const wrapper = shallow(<Cart {...props} />);
    it("render correctly Cart container", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("if Cart empty", () => {
        expect(wrapper.find('EmptyCartHead').at(0).text()).toEqual('Корзина пуста');
    });

    describe('If Cart not empty', () => {
        const nextProps ={
            products: [{
                count: 1,
                totalPrice: 100,
                product: {
                    id: 1,
                    title: 'test',
                    price: 100
                }
            }],
            cart: {
                totalPrice: 100,
                count: 1,
                products:[]
            }
        };
        const nextWrapper = shallow(<Cart {...nextProps} />);

        it('renders <EmptyCartHead /> wrapper', () => {
            expect(nextWrapper.find('EmptyCartHead')).toHaveLength(0)
        });

        it('renders <CartItem /> wrapper', () => {
            expect(wrapper.find('CartItem')).toHaveLength(props.products.length)
        })
    });
});

