import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: { 
        accessToken : null,
        hidden: false
    }, 
    mutations: {
        statechange(state,payload) {
        state.accessToken = payload
        },

        hide(hidden) {
            state.hidden = ture
            }
            
     }, 
    getters:{ }, 
    actions:{ }
})
 
export default store