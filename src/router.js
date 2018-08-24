import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import MyComponent from './components/MyComponent.vue'
import Krong from './components/Krong.vue'
import Content from './components/Content'
import Firestore from './components/Firestore'
import Survey from './components/Survey'

Vue.use(Router)

const routes = [
    //{ path: '/', component: HelloWorld },
    { path: '/home', component: HelloWorld },
    { path: '/firebase', component: Firestore },
    { path: '/admin', component: MyComponent },
    { path: '/admin/:username', component: MyComponent },
    { path: '/survey', component: Survey },
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