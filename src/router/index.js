import Vue from "vue";
import store from '@/store/index'
import Vuerouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import GridSystem from '@/views/Data'
import myData from '@/views/myData'
import Login from '@/views/Login'
import Calendar from '@/views/calendar'
import Sales from '@/views/Sales'

Vue.use(Vuerouter)
//export default router


/*
export const router = new Vuerouter({
    mode: 'history',
    routes : [
        { path: '/', name: Login ,component: Login },
        { path: '/Dashboard', name: Dashboard ,component: Dashboard },
        { path: '/Data', name: Data ,component: GridSystem }
    ]

});
*/

const requireAuth = () => (to, from, next) => {
    if (store.state.accessToken !== null) {
      return next();
    }
    next('/');
};
  





const routes =[
{
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: requireAuth()
},

{
    path:'/Data',
    name:'Data',
    component: GridSystem,
    beforeEnter: requireAuth()
    
},

{
    path:'/',
    name:'Login',
    component: Login
},

{
    path:'/myData',
    name:'myData',
    component: myData,
    beforeEnter: requireAuth()
    
},

{
    path:'/Calendar',
    name:'Calendar',
    component: Calendar,
    beforeEnter: requireAuth()
},

{
    path:'/Sales',
    name:'Sales',
    component: Sales,
    beforeEnter: requireAuth()
},

]

const router = new Vuerouter({
    mode: 'history',
    routes
})

export default router

