<template>
    <div class="bullet" :style="{left:getBulX+'px', top:getBulY+'px'}"></div>
</template>
<script>
import { mapGetters } from 'vuex'
export default({
    name: 'Bullet',
    props: {
        id:Number
    },
    data: ()=>({
        //y: this.getBulY.y,
        //x:this.getBulY.x,
        //flight:0,
    }),
    ...mapGetters([
        'getBullets',
    ]
       
    ),
    computed: {
      getBulY () {
        return this.$store.getters.getBullets.filter((item)=> item.id == this.id)[0].y
      },
      getBulX () {
        return this.$store.getters.getBullets.filter((item)=> item.id == this.id)[0].x
      },
  },
    methods: {
        
    },
    mounted () {
       
    },
    updata (){
    }
})
</script>
<style scoped>
.bullet{
    position: absolute;
    border: solid 1px aqua;
    box-shadow: 0px 0px 6px 3px cyan;
    width: 3px;
    height: 15px;
    background: cornsilk;
    
}
</style>
