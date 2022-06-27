<template>
    <div class="star" :style="{left: getStarX+'px',top:getStarY+'px'}"></div>
</template>
<script>
import {  mapGetters } from 'vuex'
export default {
    name:'Star',
    props: {
        id:Number
    },
    data: ()=>({        
    }),
    
    computed:{
        getStarY(){
            return this.getStars().filter(item=> item.id == this.id)[0].y
        },
        getStarX(){
            return this.getStars().filter(item=> item.id == this.id)[0].x
        }
    },
    methods: {
        ...mapGetters ([
            'getStars'
        ])
    }
}
</script>
<style scoped>
.star {
    z-index: 1;
     position: absolute;
    box-shadow: 0px 0px 6px 3px rgb(248, 248, 248);
    width: 2px;
    height: 2px;
    background: cornsilk;
}
</style>