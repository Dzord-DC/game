import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    
    state: {
        bullets:[],
        enemys:[],
        stars:[],
        count:0,
        fly:0
    },
    mutations: {
        addEnemy (state, payload) {
            state.enemys.push({id:payload,w:50, h:50, x:20, y:20, direction: 1, hp: 100})
        },
        addNewShot(state, payload) {
            if(state.bullets.length < 18){
            state.bullets.push(payload)}
        },
        moveSlag(state) {
            state.bullets.forEach(item=>item.y-=5)
        },
        moveEnemy(state) {
            state.enemys.forEach(item=>{
                if(item.direction == 1){
                    if(item.x>5){
                    item.x -= 1} else {
                        item.direction = 2
                    }
                }
                if(item.direction == 2){
                    if(item.x<450){
                    item.x += 1} else {
                        item.direction = 1
                    }
                }
                //item.y+=1
            })
        },
        deleteShot(state) {
          state.bullets.forEach((item,id)=>{
              if(item.y<0) {
                  state.bullets.splice(id, 1)
              }
            })
        },
        hit(state){
            state.bullets.forEach((bullet,id)=>{
                    state.enemys.forEach((enemy,i)=>{
                    if(bullet.y<=enemy.y+enemy.h){
                        if(bullet.x>=enemy.x && bullet.x<enemy.x+enemy.w) {
                           state.bullets.splice(id, 1)
                           enemy.hp -= 5
                            if(enemy.hp <= 0 ){
                                state.enemys.splice(i, 1)
                                this.commit('addEnemy')
                            }
                        }
                        
                        }
                    })
                })
        },
        addStar(state) {
            if (state.stars.length < 12){
                state.stars.push({x:Math.round(Math.random()*400+40), y:1,id:state.count++})
            }
        },
        moveStar(state) {
            state.stars.forEach((star,id)=> {
                star.y+=1
                if(star.y>799){
                    state.stars.splice(id,1)
                }
            })
        },
    },
    getters: {
        getBullets: state => state.bullets,
        getEnemys: state => state.enemys,
        getStars: state => state.stars
    },
    actions: {
        shotstate(state, payload) {
            this.commit('addNewShot',payload)
        },
        runIt(){
            this.commit('addEnemy', 1)
            this.fly = setInterval(()=>{
                this.commit('moveEnemy')
                this.commit('moveSlag')
                this.commit('hit')
                this.commit('deleteShot')
                if (Math.random()*100> 99){
                    this.commit('addStar')
                }
                this.commit('moveStar')
            },20)
        },
        stopIt() {
            clearInterval(this.fly)
        }
    }
})