import Vue from 'vue'
import VueRouter from 'vue-router'
import structure from './structure.js';
import store from './../store';

Vue.use(VueRouter)
let getRoutes = ((items = [], fbreadcrumbs = []) => {
    let routes = [];
    let structureRoutes = [];
    items.forEach(item => {
        let route = {}
        let breadcrumbs = item.title ? fbreadcrumbs.concat({
            title: item.title,
            path: item.path,
        }) : fbreadcrumbs;
        if (item.path || item.path === '') {
            route.path = item.path;
            route.name = item.name;
            route.title = item.title;
            route.meta = {
                breadcrumbs: breadcrumbs,
            };
            if (item.component) {
                route.component = item.component;
            }
            if (item.redirect) {
                route.redirect = item.redirect;
            }
            if (item.children && item.children.length) {
                routes = routes.concat(getRoutes(item.children, breadcrumbs));
            }
            routes.push(route);
        } else {
            if (item.children && item.children.length) {
                routes = routes.concat(getRoutes(item.children, breadcrumbs));
            }
        }

    });
    return routes;
})

const router = new VueRouter()
router.afterEach(route => {
    store.dispatch(STORE_TYPE.COMMON_BREADCRUMBS_UPDATE, route.meta.breadcrumbs);
});
let routerData = getRoutes(structure.structure);
router.addRoutes(routerData)
export default {
    router: router
}