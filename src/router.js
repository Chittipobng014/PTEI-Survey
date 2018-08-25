import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import Krong from './components/Krong.vue'
import Content from './components/Content'
import Firestore from './components/Firestore'
import Survey from './components/Survey'
import Operator from './components/Operator'

Vue.use(Router)

const routes = [
    { path: '/home', component: HelloWorld },
    { path: '/firebase', component: Firestore },
    { path: '/survey', component: Survey },
    { path: '/login', component: Operator },
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