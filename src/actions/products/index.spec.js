import * as t from '../../actions/types'
import { fetchProducts } from '../../actions/products'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ProductsAction', () => {
    describe('async actions', () => {
        beforeEach(function () {
            moxios.install();
        });

        afterEach(function () {
            moxios.uninstall();
        });


        it('creates FETCH_MENU_SUCCESS after successfuly fetching products', () => {

            const getPostsMock = [{
                id: 1,
                title: 'test1',
                category: 1
            }];

            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: [{
                        id: 1,
                        title: 'test1',
                        category: 1
                    },{
                        id: 2,
                        title: 'test2',
                        category: 2
                    }],
                });
            });

            const expectedActions = [
                { type: t.FETCH_PRODUCTS_START },
                { type: t.FETCH_PRODUCTS_SUCCESS, payload: getPostsMock },
            ];

            const store = mockStore({})

            return store.dispatch(fetchProducts(1)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    })
});