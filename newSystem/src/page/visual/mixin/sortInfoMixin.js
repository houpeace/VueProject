const mixin = {
    data(){
        return {
            timer:null,
        }
    },
    computed:{  
        showDetail(){
             return this.$store.state.common.showSortDetail;
        }, 
    },
    methods:{
        addListen(){
            let wrap = document.querySelector('.mainInfor');
            wrap.addEventListener("scroll",this.scrollLoad);
        },
        removeListen(){
            let wrap = document.querySelector('.mainInfor');
            wrap.removeEventListener("scroll",this.scrollLoad);
        }
    },
    mounted() {
        this.addListen();
    },
    destroyed(){
        this.removeListen();
    }
}
export default mixin