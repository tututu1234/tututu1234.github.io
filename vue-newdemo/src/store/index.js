/**
 * Created by tangkaiqiang1 on 2017/6/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    title:'主页'
};

const getters = {
    title:state=>state.title,

};

const mutations = {
    changeTitle(state,text){

        switch (text){
            case '主页':
                state.title = '主页';
                break;
            case '商品':
                state.title = '商品';
                break;
            case '购物车':
                state.title = '购物车';
                break;
            case '我的':
                state.title = '个人中心';
                break;
        }
    },
    test(state){
        alert(state.title)
    }
};

const actions = {
    changeTitle:({commit})=>{
        commit('changeTitle')
    },
    test:({commit})=>{
        commit('test')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
