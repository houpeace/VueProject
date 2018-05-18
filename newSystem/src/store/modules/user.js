import axios from '../../config/ajax.js'
const state = {
    userInfo: {
        username:'',
    },
    userCsrfToken: ""
};

const getters = {

};

const mutations = {
    [STORE_TYPE.USER_INFO](state, user) {
        state.userInfo = user || {};
    },
    [STORE_TYPE.USER_CSRF_TOKEN](state, userCsrfToken) {
        state.userCsrfToken = userCsrfToken || "";
    }
};

const actions = {
    [STORE_TYPE.USER_INFO]({
        commit
    }) {
        return axios.get("/sys/userInfo").then(res => {
            if (res.data.data) {
                commit(STORE_TYPE.USER_INFO, res.data.data);
                return res.data.data;
            }
        });
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};