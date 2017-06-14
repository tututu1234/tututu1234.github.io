<template>
    <div id="cotar" class="top-cotar">
{{title}}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    export default{
      computed:mapGetters([
          'title'
      ])
    }
</script>

<style scoped lang="scss">
    .top-cotar{
        width: 100%;
        height:50px;
        text-align: center;
        font-size: 20px;
        color:#fff;
        line-height: 50px;
        position: fixed;
        top:0;
        left:0;
        .logo{
            img{
                width: 100px;
            }
        }
    }
</style>