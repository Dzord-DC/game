<template>
    <div class="enemy" :style="{left:dataEnamyX+'px', top:dataEnamyY+'px'}">
        {{dataEnamyHP}}
    </div>
</template>
<script>
export default {
    name: 'EasyEnemy',
    props: {
        id:Number
    },
    data: () => ({

    }),
    computed: {
        dataEnamyY(){
            return this.$store.getters.getEnemys.filter((item)=> item.id == this.id)[0].y
        },
        dataEnamyX(){
            return this.$store.getters.getEnemys.filter((item)=> item.id == this.id)[0].x
        },
        dataEnamyHP(){
            return this.$store.getters.getEnemys.filter((item)=> item.id == this.id)[0].hp
        }
    },

}
</script>
<style scoped>
.enemy{
    border-radius: 20% ;
    position: absolute;
    background-color: red;
    width: 50px;
    height: 50px;
    z-index: 2;
}
</style>