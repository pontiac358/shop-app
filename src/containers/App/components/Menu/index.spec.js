import React from 'react'
import { shallow } from 'enzyme'
import Menu from '../Menu'

describe('Menu component', () => {
    const props = {
        menu:{
            data: [
                {
                    title: 'test',
                    url: 'test',
                    id: 1
                }
            ],
            isLoading: false,
        }
    };

    const wrapper = shallow(<Menu {...props} />);

    it("render correctly ProductList container", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders <MenuLink /> wrapper', () => {
        expect(wrapper.find('MenuLink')).toHaveLength(props.menu.data.length)
    })

});

