import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import Krong from './components/Krong.vue'
import Content from './components/Content'
import Firestore from './components/Firestore'
import Survey from './components/Survey'
import Operator from './components/Operator'
import Qimg from './components/Qimg'
import Mchoice from './components/Mchoice'

Vue.use(Router)

const routes = [
    { path: '/home', component: HelloWorld },
    { path: '/firebase', component: Firestore },
    { path: '/survey', component: Survey },
    { path: '/login', component: Operator },
    { path: '/',
      component: Krong,
      children:[
        { path: 'new', component: Content},
        { path: 'start', component: Firestore},
        { path: 'qimg', component: Qimg},
        { path: 'mchoice', component: Mchoice}

      ]
    }
  ]

  const router = new Router({
    routes 
  })

  export default router