<template>
    <div class="top-blank">
        <div class="detail-item flex">

            <img :src="info.hash" />
            <div>{{info.title}}</div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                info:{},
                id:this.$route.params.id
            }
        },
        mounted(){
            this.getAjax();
            console.log(this.$route.params.id)
        },
        methods:{
            getAjax(){
                this.$http.get('../../static/data.json').then(
                    (response)=>{
                        this.info = response.body.data[this.id]
                    },(err)=>{
                        console.log(err)
                    }
                )
            }
        }

    }
</script>

<style scoped lang="scss">
    .detail-item{
        background: #fff;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:15px;
    }
</style>