<template>
    <div>
        <div class="news-item" v-for="item in list">
            <img src="../assets/logo.png"/>
            <div class="right">{{item.title}}</div>

        </div>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                list:[{title:'lllll'}]
            }
        },
        mounted(){
           this.getAjax();
        },
        methods:{
            getAjax(){
                this.$http.get('../../static/data.json').then(
                    (response)=>{
                        this.list = response.body.data;
                    },(response)=>{
                        console.log(response)
                    }
                )
            }
        }
    }
</script>

<style scoped lang="scss">
    .news-item{
        display: flex;
        background: #fff;
        margin: 5px 0;
        padding: 5px;
        img{
            height:60px;
            margin-right: 10px;
        }
    }
</style>