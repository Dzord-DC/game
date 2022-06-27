<template>
    <div class="ship" :style="{left:coordinate +'px'}"></div>
    
</template>
<script>
export default {
    name: 'Ship',
    props: {
        coordinate: {
            type:Number,
            defulte: 250,
        }
    }

}
</script>
<style scoped>
.ship{
    display: block;
    position: absolute;
    top: 750px;
    border: 2px solid #000;
    background-color: brown;
    width: 25px;
    height: 25px;
    transform: rotate(45deg);
    box-shadow: 6px 6px 9px 1px orange;
    z-index: 2;
}

</style>