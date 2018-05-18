import axios from '../../config/ajax.js'
const state = {
    dataInit:false,
    data: {
       userInfo:{
            basicInfo:{},
            brandAndClassPreference:[],
            goodsPreference:[],
       },
       flowInfo:{
            configParams:[]
       },
       defaultSort:[],
       personalSort:[],
    },
    queryParam:{
      start:0,
      offset:30,
    },
    dataType:"person",
};

const getters = {

};

const mutations = {
    [STORE_TYPE.SCHEDULE_DATA_INIT](state, data) {
        state.dataInit = data || false;
    },
    [STORE_TYPE.SCHEDULE_DATA](state, data) {
        state.data = data || {};
    },
    [STORE_TYPE.SCHEDULE_APPENDDATA](state, data) {
        state.data.defaultSort = state.data.defaultSort.concat(data.defaultSort);
        state.data.personalSort = state.data.personalSort.concat(data.personalSort);
    },
    [STORE_TYPE.SCHEDULE_DATA_TYPE](state, data) {
        state.dataType = data || "";
    },
    [STORE_TYPE.SCHEDULE_PARAM](state, data) {
        state.queryParam = data || "";
    },
    [STORE_TYPE.SCHEDULE_PARAM_START](state, data) {
        state.queryParam.start += data || 0;
    },
};

const actions = {
    [STORE_TYPE.SCHEDULE_DATA]({
        commit
    }) {
        return axios.post("/brand/list",{queryJson:JSON.stringify(state.queryParam)}).then(res => {
            commit(STORE_TYPE.SCHEDULE_DATA_INIT, true);
            if (res.data.data) {
                commit(STORE_TYPE.SCHEDULE_DATA, res.data.data);
                return res.data.data;
            }
        });
    },
    [STORE_TYPE.SCHEDULE_APPENDDATA]({
        commit
    }) {
        return axios.post("/brand/list",{queryJson:JSON.stringify(state.queryParam)}).then(res => {
            if (res.data.data) {
                commit(STORE_TYPE.SCHEDULE_APPENDDATA, res.data.data);
                return res.data.data;
            }
        });
    },
};

export default {
    state,
    getters,
    actions,
    mutations
};