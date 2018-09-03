import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import Krong from './components/Krong.vue'
import Content from './components/Content'
import Firestore from './components/Firestore'
import Survey from './components/Survey'
import Operator from './components/Operator'
import Qimg from './components/Qimg'
import SurveyLoader from './components/SurveyLoader'
import QYesNo from './components/QYesNo'
import Qtextinput from './components/Qtextinput'
import Qexpect from './components/Qexpect'
import Qagreement from './components/Qagreement'
import Qsatisfaction from './components/Qsatisfaction'
import Qexpend from './components/Qexpend'
import Qhours from './components/Qhours'

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
        { path: 'loader', component: SurveyLoader},
        { path: 'qyesno', component: QYesNo},
        { path: 'qtextinput', component: Qtextinput},
        { path: 'qexpect', component: Qexpect},
        { path: 'qagreement', component: Qagreement},
        { path: 'qsatisfaction', component: Qsatisfaction},
        { path: 'qexpend', component: Qexpend},
        { path: 'qhours', component: Qhours}

      ]
    }
  ]

  const router = new Router({
    routes 
  })

  export default router