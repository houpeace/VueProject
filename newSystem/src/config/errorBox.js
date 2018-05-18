import {MessageBox} from 'element-ui';
import CONSTANT from './constant.js';
let RESPONSE_CODE = CONSTANT.RESPONSE_CODE;
let noop = () => {
    return Promise.resolve();
}

let commonError = () => {
    return MessageBox.alert('接口出错', {
        customClass: 'form-outside-position'
    })
}

let alertError = (errorCode) => {
    return MessageBox.alert(RESPONSE_CODE[errorCode], {
        customClass: 'form-outside-position'
    });
}

let loginError = () => {
    return MessageBox.confirm('登录已过期，请重新登录', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        callback: (action, instance) => {
            window.location.reload();
        },
    })
}

// 默认加载时调用
export default function (errorCode, options) {
    if (errorCode == '10010') {
        return loginError();
    } else if (RESPONSE_CODE[errorCode]) {
        return alertError(errorCode);
    } else {
        return commonError();
    }
}

// 对象解构方式加载时调用
export {
    commonError,
    alertError,
    loginError,
}
