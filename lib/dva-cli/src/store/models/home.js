export default {
    namespace: 'home',

    state: {},

    reducers: {
        save(state, action) {
            return {...state, ...action.payload };
        }
    },

    effects: {
        * fetch({ payload }, { call, put }) {
            yield put({ type: 'save' });
        }
    },

    subscriptions: {
        init({ dispatch }) {
            dispatch({});
        }
    }
};