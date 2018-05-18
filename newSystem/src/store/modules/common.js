import axios from '../../config/ajax.js'

const state = {
    isLoading: false,
    showNav: true,
    permission: {},
    channel_list: [],
    province_list: [],
    group_list: [],
    showSortDetail: false,
    breadcrumbs: [],
}

const getters = {

}

const mutations = {
    [STORE_TYPE.COMMON_PERMISSION](state, data) {
        if (JSON.stringify(state.permission) == '{}') {
            state.permission = data;
        }
    },
    [STORE_TYPE.SHOW_NAV](state, data) {
        state.showNav = data;
    },
    [STORE_TYPE.IS_LOADING](state, data) {
        state.isLoading = data;
    },
    [STORE_TYPE.CHANNEL_LIST](state, data) {
        state.channel_list = data;
    },
    [STORE_TYPE.PROVINCE_LIST](state, data) {
        state.province_list = data;
    },
    [STORE_TYPE.GROUP_LIST](state, data) {
        state.group_list = data;
    },
    [STORE_TYPE.SHOW_SORT_DETAIL](state, data) {
        state.showSortDetail = data;
    },
    [STORE_TYPE.COMMON_BREADCRUMBS_UPDATE](state, breadcrumbs) {
        state.breadcrumbs = breadcrumbs;
    },
}

const actions = {
    [STORE_TYPE.CHANNEL_LIST]({
        commit
    }) {
        return axios.get("/sys/config?types=channels").then(res => {
            if (res.data.data) {
                commit(STORE_TYPE.CHANNEL_LIST, res.data.data.channels);
                return res.data.data.channels;
            }
        });
    },
    [STORE_TYPE.PROVINCE_LIST]({
        commit
    }) {
        return axios.get("/sys/config?types=province").then(res => {
            if (res.data.data) {
                commit(STORE_TYPE.PROVINCE_LIST, res.data.data.provinces);
                return res.data.data.province;
            }
        });
    },
    [STORE_TYPE.GROUP_LIST]({
        commit
    }) {
        return axios.get("/sys/config?types=groups").then(res => {
            if (res.data.data) {
                commit(STORE_TYPE.GROUP_LIST, res.data.data.groups);
                return res.data.data.groups;
            }
        });
    },
    [STORE_TYPE.COMMON_BREADCRUMBS_UPDATE]({ commit }, breadcrumbs) {
        commit(STORE_TYPE.COMMON_BREADCRUMBS_UPDATE, breadcrumbs);
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}