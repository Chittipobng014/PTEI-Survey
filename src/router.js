import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/MyComponent.vue'
import Krong from './components/Krong.vue'
import Content from './components/Content'

Vue.use(Router)

const routes = [
    //{ path: '/', component: HelloWorld },
    { path: '/home', component: HelloWorld },
    { path: '/admin', component: MyComponent },
    { path: '/admin/:username', component: MyComponent },
    { path: '/',
      component: Krong,
      children:[
        { path: 'new', component: Content}
      ]
    }
  ]

  const router = new Router({
    routes 
  })

  export default router