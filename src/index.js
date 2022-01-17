import Vue from 'vue'
import Hello from './hello.vue'

new Vue ({
    el: '#app',
    data:{
        message: "Vue on webpack"
    },
    components: {
        Hello
    },
    template: `<div>
               <h1>{{message}}</h1>
               <hello/>
               </div>`
})