const mixin = {
    data() {
        return {
            personalLink: CONSTANT.wikiLink.personal,
            rules: {
                channelId: [{
                    required: true,
                    message: '请选择频道',
                    trigger: 'change'
                }, ],
                uid: [{
                    required: true,
                    message: '请输入用户UID',
                    trigger: 'blur'
                }, ],
                mid: [{
                    required: true,
                    message: '请输入用户MID',
                    trigger: 'blur'
                }, ],
                province: [{
                    required: true,
                    message: '请选择地区',
                    trigger: 'change'
                }, ],
                cityId: [{
                    required: true,
                    message: '请选择城市',
                    trigger: 'change'
                }, ],
                brand: [{
                    required: true,
                    message: '请输入档期名称/档期ID',
                    trigger: 'blur'
                }, ],
                group: [{
                    required: true,
                    message: '请选择用户群',
                    trigger: 'blur'
                }, ],
                groupType: [{
                    required: true,
                    message: '请选择新老客',
                    trigger: 'blur',
                    type: 'number'
                }, ],
            }

        }
    },
    computed: {
        channelList() {
            return this.$store.state.common.channel_list
        },
        provinceList() {
            return this.$store.state.common.province_list
        },
        groupList() {
            return this.$store.state.common.group_list
        },
    },
    methods: {
        resetCityList() {
            this.cityList = this.provinceList.filter(province => {
                return province.id == this.form.province;
            })[0].cities;
            this.form.cityId = this.cityList[0].id;
        },
        querySchedule() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.$store.commit('SCHEDULE_PARAM', this.form);
                    this.$store.commit('SCHEDULE_PARAM_START');
                    this.$store.dispatch(STORE_TYPE.SCHEDULE_DATA)
                        .then(data => {
                            this.queryCallback(data)
                        });
                }
            })
        },
        queryGoods() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    this.$store.commit('GOODS_PARAM', this.form);
                    this.$store.commit('GOODS_PARAM_START');
                    this.$store.dispatch(STORE_TYPE.GOODS_DATA, this.form)
                        .then(data => {
                            this.queryCallback(data)
                        })
                }
            })
        },
        queryCallback(data) {
            if (data.personalSort.length == 0) {
                this.$message({
                    showClose: true,
                    message: '无该档期结果，请检查档期名称/ID是否正确',
                    type: 'error'
                });
            }
        }
    },
    mounted() {
        this.$store.dispatch(STORE_TYPE.CHANNEL_LIST);
        this.$store.dispatch(STORE_TYPE.PROVINCE_LIST).then(()=>{
            this.resetCityList();
        })
        this.$store.dispatch(STORE_TYPE.GROUP_LIST);
        window.store = this.$store;
        window.form = this.form;
    },
    destroyed() {}
}
export default mixin