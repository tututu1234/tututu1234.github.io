<template>

    <div class="bottom-fixed" v-show="isShow">
        <div class="bottom-item"
             v-for ="(item,index) in menu"
             :class="{activeitem:iscur == index}"
             @click = "setActive(index,item)"
        >{{item}}
            <!--<router-link to="/index">{{item}}</router-link>-->
        </div>

    </div>
</template>

<script type="es6">
    import {mapActions} from 'vuex'
//    import Vue from 'vue'
//    import VueRouter from 'vue-router'
//    Vue.use(VueRouter)
    export default{
       data(){
           return{
               iscur:0,
               menu :['主页','商品','购物车','我的'],
               isShow:true
           }
       },

        methods:{
           setActive(val,text){
               this.iscur = val;
               this.$store.commit('changeTitle',text);
               switch (val){
                   case 0:
                       this.$router.push({path:'/index'});
                       break;
                   case 1:
                       this.$router.push({path:'/goods'});
                       break;
                   case 2:
                       this.$router.push({path:'/shopcart'});
                       break;
                   case 3:
                       this.$router.push({path:'/user'});
                       break;
               }
           }
        }
    }
</script>

<style scoped lang="scss">
    .bottom-fixed{
        width: 100%;
        height: 50px;
        display: flex;
        position: fixed;
        bottom: 0;
        left:0;
        background: #fff;
        .bottom-item{
            flex:1;
            text-align: center;
            line-height: 50px;
            font-size: 16px;
            color:gray;
            border-top: 1px solid #f4f4f4;
            &.activeitem{
                color:forestgreen;
            }
        }
    }
</style>