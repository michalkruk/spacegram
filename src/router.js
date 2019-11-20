import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Search from './views/Search.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: 'About',
            path: '/about',
            component: About
        },
        {
            name: 'Search',
            path: '/',
            component: Search
        }
    ]
});
