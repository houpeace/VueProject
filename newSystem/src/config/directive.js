
let install = (Vue, options= {}) => {

    //权限指令
    Vue.directive("permission", {
        bind:  function(el, binding) {
            let permission = binding.value
            let btnCodeList = localStorage.getItem('btnCodeList') || [];  
            if (btnCodeList.indexOf(permission) < 0 && btnCodeList.length > 0) {
                el.remove() 
            }
        } 
    });

}

export default {
    install
}