import * as t from '../../actions/types'
import { fetchMenu } from '../../actions/menu'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares);

describe('MenuAction', () => {
    describe('async actions', () => {
        beforeEach(function () {
            moxios.install();
        });

        afterEach(function () {
            moxios.uninstall();
        });


        it('creates FETCH_MENU_SUCCESS after successfuly fetching menu', () => {
            const getPostsMock = [1,2,3];
            moxios.wait(() => {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    response: getPostsMock,
                });
            });

            const expectedActions = [
                { type: t.FETCH_MENU_START },
                { type: t.FETCH_MENU_SUCCESS, payload: getPostsMock },
            ];

            const store = mockStore({})

            return store.dispatch(fetchMenu()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    })
});