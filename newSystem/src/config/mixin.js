let jqMixin = {
    methods: {
        goto(path) {
            if (path && typeof path === 'string') {
                if (/^\//.test(path)) {
                    this.$router.push(path);
                } else {
                    this.$router.push([this.$route.fullPath, path].join('/'));
                }
            } else if (typeof path === 'number') {
                this.$router.go(path);
            }
        },
        forward(){
            this.goto(-1);
        },
        logout(){
             window.location.href = window.location.protocol + '//' + window.location.host + '/' + "logout";
         },
        login(){
              window.location.reload();            
         },
        queryVauleByMap(map, value, returnKey = "name", key = "id") {
            for (var i = map.length - 1; i >= 0; i--) {
                if (map[i][key] == value) {
                    return map[i][returnKey]
                }
            }
        },
        formatDate(val, format) {
            if (!val) return '';
            let d;
            if (typeof val == 'number') {
                d = new Date(val);
            } else if (val instanceof Date) {
                d = val;
            }
            var o = {
                "M+": d.getMonth() + 1, //月份
                "d+": d.getDate(), //日
                "h+": d.getHours(), //小时
                "m+": d.getMinutes(), //分
                "s+": d.getSeconds(), //秒
                "q+": Math.floor((d.getMonth() + 3) / 3), //季度
                "S": d.getMilliseconds() //毫秒
            };
            if (/(y+)/.test(format))
                format = format.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(format))
                    format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return format;
        },
        checkDateValid(date) {
            if (Object.prototype.toString.call(date) === "[object Date]") {
                // it is a date
                if (isNaN(date.getTime())) { // d.valueOf() could also work
                    return false;
                } else {
                    return true;
                }
            } else {
                return false;
            }
        },
        getStringfy(obj) {
            let str = '';
            for (let key in obj) {
                str += ('&' + key + '=' + obj[key]);
            }
            return str.substr(1);
        },
        copyObj(obj) {
            var o = {}
            for (var i in obj) {
                if (Object.prototype.toString.call(obj[i]) == '[object Object]' || Object.prototype.toString.call(obj[i]) == '[object Array]' ) {
                    o[i] = this.copyObj(obj[i]);
                }else{
                    o[i] = obj[i];
                }
            }
            return o;
        },
        extend(a, b) {
            let extendObj = {};
            let start = 0;
            if (typeof a == 'boolean') {
                start = 1;
            }
            for (var i = start; i < arguments.length; i++) {
                for (let key in arguments[i]) {
                    extendObj[key] = arguments[i][key];
                }
            }
            if (typeof a == 'boolean') {
                if (a) {
                    b = extendObj;
                }
            } else {
                a = extendObj;
            }
            return extendObj;
        },
        
        handleSizeChange(val) {
            this.pageParam.pageNo = 1;
            this.pageParam.pageSize = val;
            this.queryList();
        },
        handleCurrentChange(val) {
            this.pageParam.pageNo = val;
            this.queryList();
        },
        clear() {
            for (let key in this.queryParam) {
                if (typeof this.queryParam[key] == "string") {
                    this.queryParam[key] = ""
                } else {
                    this.queryParam[key] = -1
                }
            }
        },
        errorMsg(msg) {
          this.$message({
            type: 'error',
            showClose: true,
            message: msg || '请求失败',
            duration: 2000
          })
        },
        successMsg(msg) {
          this.$message({
            type: 'success',
            showClose: true,
            message: msg || '请求失败',
            duration: 2000
          })
        }
    },
}
let install = (Vue, options = {}) => {
    Vue.mixin(jqMixin);
};

export default {
    install
};