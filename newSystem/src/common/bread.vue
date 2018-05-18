<template>
	<el-breadcrumb separator=">">
		<el-breadcrumb-item v-for="breadcrumb in breadcrumbs" :to="breadcrumb.path" :replace="true" :key="breadcrumb.title">
	    	{{ breadcrumb.title }}
		</el-breadcrumb-item>		
	</el-breadcrumb>
</template>

<script type="text/javascript">
	export default {
		name: '',
        components: {},
        methods: {},
        computed: {
            breadcrumbs() {
                return this.$store.state.common.breadcrumbs;
            }
        },
        watch: {
        },
        data() {
            return {
            };
        },
        mounted() {
        },
	}
</script>

<style type="text/scss">
	
</style>