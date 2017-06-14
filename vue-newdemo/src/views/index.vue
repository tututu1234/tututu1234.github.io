<template>
    <div>
        <div class="index-menu">
            <div class="index-item"
                 v-for="(item,index) in list"
                 :class="{active:iscur==index}"
                 @click = "changeTab(index)"
            >{{item}}</div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                list:['新闻','动态','关注','科技'],
                iscur:0
            }
        },
        methods:{
            changeTab(val){
                this.iscur = val;
                switch (val){
                    case 0:
                        this.$router.push({path:'/index/news'});
                        break;
                    case 1:
                        this.$router.push({path:'/index/trend'});
                        break;
                    case 2:
                        this.$router.push({path:'/index/focus'});
                        break;
                    case 3:
                        this.$router.push({path:'/index/tech'});
                        break;
                }

            }
        }

    }
</script>

<style scoped lang="scss">
    .index-menu{
        width: 100%;
        height:40px;
        background: #fff;
        display: flex;
        margin-top: 55px;
        .index-item{
            flex:1;
            font-size: 14px;
            text-align: center;
            line-height: 40px;
            &.active{
                color:forestgreen;
                border-bottom: 1px solid forestgreen;
            }
        }
    }
</style>